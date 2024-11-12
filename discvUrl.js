const util = require("util");
const { setTimeout } = require('node:timers/promises');
const delay = require('util').promisify(setTimeout)
const discCategories = require("./discCategories");

const discoverHeaders = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
  //Accept: '"application/json"',
  "Accept-Language": "en-US,en;q=0.5",
  //"Content-Type": "application/json",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLzU1NDAiLCJzY29wZSI6eyI5MzE3ODA3OSI6WyJicjRiYm1tdzM1Iiwib3p2bnFqNTRpNSIsInc2Z3Q0NDh4dWciLCJqbHhnaGl6NjhrIiwidHhhanB1dHZjOCJdLCIxNjA2NTUxNjAiOlsiYnI0YmJtbXczNSIsIm96dm5xajU0aTUiLCJ3Nmd0NDQ4eHVnIiwiamx4Z2hpejY4ayIsInR4YWpwdXR2YzgiXX0sInN0YWdlIjoicHJvZCIsInJlZ2lvbiI6InVzLWVhc3QtMSIsImp0aSI6ImM4ZDc5ZTcxLTcyZjMtNDkyMS04NGQ4LWYxNzE5ZjQ1N2VmNyIsImlhdCI6MTcyMTA4MjYxNCwiZXhwIjoxNzIxMTY5NjE0fQ.V2VKHex2OKywtFxPcssibnh3hbHDzPhYuwJz5i6XWMQ",
  Priority: "u=4",
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
};

const discUrl = {
  product: "https://discover.sitecorecloud.io/search-rec/199153384-160655160/3",
  category:
    "https://discover.sitecorecloud.io/portal/160655160/v1/microservices/catalog/categories",
  facets:
    "https://api.rfksrv.com/portal/93178079/v2/microservices/widget-locator/urls",
  facetsDev:
    "https://api.rfksrv.com/portal/160655160/v2/microservices/widget-locator/urls",
};

const gendersAttribute = {
  hardFilterKey: "genders",
  type: "enumeration",
  attribute: "genders",
  children: [
    {
      id: "Men's",
      value: "Men's",
    },
    {
      id: "Unisex",
      value: "Unisex",
    },
    {
      id: "Women's",
      value: "Women's",
    },
  ],
};

const materialAttribute = {
  attribute: "material",
  type: "enumeration",
  hardFilterKey: "material",
  children: [
    {
      id: "Aluminum",
      value: "Aluminum",
    },
    {
      id: "Ballistic Nylon",
      value: "Ballistic Nylon",
    },
    {
      id: "Carbon Fiber",
      value: "Carbon Fiber",
    },
    {
      id: "Fabric",
      value: "Fabric",
    },
    {
      id: "Leather",
      value: "Leather",
    },
    {
      id: "Metal",
      value: "Metal",
    },
    {
      id: "Nylon",
      value: "Nylon",
    },
    {
      id: "Nylon Tricot",
      value: "Nylon Tricot",
    },
    {
      id: "Pebbled Leather",
      value: "Pebbled Leather",
    },
    {
      id: "Polycarbonate",
      value: "Polycarbonate",
    },
    {
      id: "Polyester",
      value: "Polyester",
    },
    {
      id: "Recycled Polyester",
      value: "Recycled Polyester",
    },
    {
      id: "Smooth Leather",
      value: "Smooth Leather",
    },
    {
      id: "Stainless Steel",
      value: "Stainless Steel",
    },
    {
      id: "Tegris®",
      value: "Tegris®",
    },
    {
      id: "Textured Leather",
      value: "Textured Leather",
    },
    {
      id: "Titanium",
      value: "Titanium",
    },
    {
      id: "Zinc Alloy",
      value: "Zinc Alloy",
    },
  ],
};

const colorAttribute = {
  hardFilterKey: "color_group",
  type: "enumeration",
  attribute: "color_group",
  children: [
    {
      id: "Beige",
      value: "Beige",
    },
    {
      id: "Black",
      value: "Black",
    },
    {
      id: "Blue",
      value: "Blue",
    },
    {
      id: "Brown",
      value: "Brown",
    },
    {
      id: "Green",
      value: "Green",
    },
    {
      id: "Grey",
      value: "Grey",
    },
    {
      id: "Metallic",
      value: "Metallic",
    },
    {
      id: "Orange",
      value: "Orange",
    },
    {
      id: "Pink",
      value: "Pink",
    },
    {
      id: "Purple",
      value: "Purple",
    },
    {
      id: "Red",
      value: "Red",
    },
    {
      id: "White",
      value: "White",
    },
    {
      id: "Yellow",
      value: "Yellow",
    },
  ],
};

async function getUrls(urlAttribute, attributeValue, categories) {
  try {
    const response = await fetch(discUrl.facetsDev, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: discoverHeaders,
      body: JSON.stringify([
        {
          urlFormat: `/{all_category_ids.url_path,fixed}/{${urlAttribute},fixed}`,
          spaceSubstitute: "-",
          hierarchySeparator: "/",
          attributeSeparator: "/",
          attributes: [
            {
              attribute: "all_category_ids",
              type: "enumeration",
              hardFilterKey: "all_category_ids",
              children: categories,
            },
            attributeValue,
          ],
        },
      ]),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getCats(urlAttribute, attributeValue) {
  try {
    const response = await fetch(discUrl.category, {
      headers: discoverHeaders,
      referrerPolicy: "no-referrer",
      body: null,
      method: "GET",
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getProds(facetPath) {
  try {
    const response = await fetch(discUrl.product, {
      method: "POST",
      headers: discoverHeaders,
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        data: {
          preview: {
            portal_user_id: "5540",
            variation_id: "981022",
            preserve_empty_slots: false,
            widget_id: "981021",
          },
          context: {
            page: {
              uri: facetPath,
            },
          },
          batch: [
            {
              widget: {
                rfkid: "rfkid_10",
                widget_id: "767533",
              },
              content: {
                product: {
                  field: {
                    value: ["sku"],
                  },
                },
              },
            },
          ],
        },
      }),
    });

    //const json = await response.json();
    response.text().then((item) => {
      console.log(item);
    });
    console.log(facetPath);
    /*
    console.log(
        util.inspect(
          product && product.total_item,
          { maxArrayLength: null },
          null,
          true
        )
      );

      /*
        console.log(item.url)
        console.log(product && product.total_item)
        console.log(product && product.errors && product.errors[0].type)
        */
    //console.log(json)
    //return json
  } catch (error) {
    console.error(error.message);
  }
}

/*
  getUrls("material.value", materialAttribute);
  getUrls("color_group.value", colorAttribute);
  getUrls("genders.value", gendersAttribute);
*/
//getProds("/c/bags/nylon");

//getCats().then((json) => {
//console.log(util.inspect(json.items, false, null, true));

getUrls("genders.value", gendersAttribute, discCategories).then((json) => {
  //console.log(util.inspect(json, { maxArrayLength: null }, null, true));

  json.urls.map(async (item) => {
    // console.log(item.url)
    getProds(item.url)

  });
  //console.log(util.inspect(json, false, null, true));
  //console.log(json.urls)
});

//});

//getProds("/c/bags/bags-material/bags-nylon/mens");

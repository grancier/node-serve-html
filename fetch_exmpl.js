const discoverHeaders = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
  Accept: '"application/json"',
  "Accept-Language": "en-US,en;q=0.5",
  "Content-Type": "application/json",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLzU1NDAiLCJzY29wZSI6eyI5MzE3ODA3OSI6WyJicjRiYm1tdzM1Iiwib3p2bnFqNTRpNSIsInc2Z3Q0NDh4dWciLCJqbHhnaGl6NjhrIiwidHhhanB1dHZjOCJdLCIxNjA2NTUxNjAiOlsiYnI0YmJtbXczNSIsIm96dm5xajU0aTUiLCJ3Nmd0NDQ4eHVnIiwiamx4Z2hpejY4ayIsInR4YWpwdXR2YzgiXX0sInN0YWdlIjoicHJvZCIsInJlZ2lvbiI6InVzLWVhc3QtMSIsImp0aSI6IjZlMTBhMmQ0LWVmMjAtNDMzNy05MmRiLWI5NjAzMDVmN2Y3YiIsImlhdCI6MTcyMDk5NDg5NCwiZXhwIjoxNzIxMDgxODk0fQ.IFnyWrUtzoDTaP4F9GlRJXtPFYFVBZGOMglqvdrZF7w",
  Priority: "u=4",
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
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

async function getUrls(urlAttribute, attributeValue) {
  try {
    const response = await fetch(
      "https://api.rfksrv.com/portal/93178079/v2/microservices/widget-locator/urls",
      {
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
                children: [
                  {
                    id: "22",
                    url_path: "/c/accessories/",
                  },
                  {
                    id: "2",
                    url_path: "/c/luggage/",
                  },
                  {
                    id: "3",
                    url_path: "/c/bags/",
                  },
                  {
                    id: "4",
                    url_path: "/c/backpacks/",
                  },
                ],
              },
              //materialAttribute
              attributeValue,
            ],
          },
        ]),
      }
    );

    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getUrls("material.value", materialAttribute);
getUrls("color_group.value", colorAttribute);
getUrls("genders.value", gendersAttribute);

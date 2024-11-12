/**
 * Parse string representation of array
 * @param {string} listText - string representation of Array (may be empty)
 * @return {Array} - parsed array (null for parse error)
 */
function parseList(listText) {
  var list = [];
  if (listText && listText.length) {
    try {
      list = JSON.parse(listText);
    } catch (err) {
      list = null;
    }
  }
  return list;
}

/**
 * Parse string representation of array
 * @param {Objet} productLineItem - productLineItem
 * @return {Object} -returns a json object
 */
function getSizeToCutOption(productLineItem) {
  var collections = require("*/cartridge/scripts/util/collections");
  var result = { sizeToCutPresnt: false };
  var allOptionProductLineItems = productLineItem.getOptionProductLineItems();
  var sizeToCutPresent = collections.find(
    allOptionProductLineItems,
    function (lineItem) {
      return lineItem.optionID === "sizeToCut";
    }
  );
  if (!empty(sizeToCutPresent)) {
    result.sizeToCutPresnt = true;
    result.sizeId = sizeToCutPresent.optionValueID;
  }
  return result;
}
/**
 * Parse string representation of array
 * @param {Array} items - emarsysPayload LineItems
 * @param {Array} allProductLineItems - all order ProductLineItems
 * @param {Array} entryCode - productToreturn entryCode
 * @return {Array} - parsed array (null for parse error)
 */
function addReturnFlag(items, allProductLineItems, entryCode) {
  var productToreturn = allProductLineItems.find(function (productLineItem) {
    return productLineItem.custom.entryCode === entryCode;
  });
  var emarsysPayloadItems = [];
  items.forEach(function (item) {
    var payloadItem = item;
    if (productToreturn.productID === item.ItemNumber) {
      payloadItem.isReturnedProduct = true;
    }
    emarsysPayloadItems.push(payloadItem);
  });
  return emarsysPayloadItems;
}
const producLineItem = {
  uuid: "7f7272092b3707fc0759387fdf",
  id: "01171612693",
  productName: "Continental Dual Access 4 Wheeled Carry-On",
  productType: "variant",
  brand: "Tumi",
  isSubscriptionOnly: false,
  price: {
    sales: {
      value: 1095,
      currency: "USD",
      formatted: "$1,095.00",
      decimalPrice: "1095.00",
    },
    list: null,
  },
  renderedPrice:
    '    <div class="price">\n        \n        <span>\n    \n\n    \n\n    \n        \n        <span class="sales">\n            \n            \n            \n                <span class="value" content="1095.00">\n            \n            \n\n    $1,095.00\n</iselse>\n\n\n\n\n\n            </span>\n        </span>\n    \n</span>\n\n    </div>\n\n\n',
  images: {
    small: [
      {
        alt: "01171612693",
        url: "https://tumi.scene7.com/is/image/Tumi/1171612693_main?wid=282&hei=282",
        index: "0",
        title: "01171612693",
        absURL:
          "https://tumi.scene7.com/is/image/Tumi/1171612693_main?wid=282&hei=282",
      },
    ],
  },
  variationAttributes: [
    {
      displayName: "Color",
      displayValue: "Black/Gold",
      baseAccentColor: null,
      attributeId: "styleVariant",
      id: "color",
    },
  ],
  availability: {
    messages: ["In Stock"],
    inStockDate: "01/01",
    label: "",
    expected: "",
  },
  available: true,
  quantity: 1,
  isGift: false,
  renderedPromotions: "",
  eligiblePromotions: null,
  UUID: "7687805a38761f7a316d6edf8e",
  isOrderable: true,
  shipmentUUID: "d0db9ee03f8ae51a671d784738",
  isBonusProductLineItem: false,
  priceTotal: {
    price: "$1,095.00",
    renderedPrice:
      '    \n        <div class="strike-through non-adjusted-price">\n            null\n        </div>\n    \n    <div class="pricing line-item-total-price-amount item-total-null">$1,095.00</div>\n\n',
  },
  quantityOptions: {
    minOrderQuantity: 1,
    maxOrderQuantity: 10,
  },
  options: [],
  bonusProductLineItemUUID: null,
  preOrderUUID: null,
  division: "Tumi",
  collection: "TUMI ALPHA",
  materialDescription: "CONT DUAL ACCESS 4WHL C/O",
  warranty: "5 year",
  relatedSKU: "96685-1761",
  relatedMaterials: "96685",
  pdpDisclaimer: null,
  volumeCapacity: "42",
  expandedCapacity: null,
  vertexTaxCode: "4316",
  volumeCap: null,
  numberOfWheels: "4.000",
  department: "Travel",
  content: "Ballistic",
  categories: "Core",
  basicMaterial: "NYLON",
  expandable: true,
  liningMaterial: "100% POLYESTER",
  lifeCycle: "CORE",
  seasonCategory: "SP20",
  seasonYear: "2020",
  gender: "Men's",
  MSRP: null,
  ID: null,
  materialGroup: "FGRT",
  giftbox: false,
  accentable: true,
  baseaccentingSKU: null,
  isAccentingSku: false,
  accentingskus: "1373971041",
  baseaccentingSKUColor: null,
  accentPriceContainer: null,
  coloraccentImg: null,
  baseAccentingSku: null,
  hasAccentingProducts: false,
  securityFriendly: null,
  madeIn: "CN",
  avalaraTaxCode: "P0000000",
  premiumMono: true,
  premiumPatch: true,
  patchSize: null,
  premiumLuggageTag: true,
  backorderFlag: null,
  badge: null,
  contentGroup: null,
  handTag: null,
  levelThreeType: "Carry-On Luggage",
  addABagType: null,
  suitorSection: null,
  liningMaterialContent: null,
  pouchMaterialContent: null,
  exteriorFeatures: [
    "Front-lid or split-case zip entry to main compartment (both with security zippers)",
    " Front U-zip pocket",
    " Gusseted front straight-zip pocket",
    ' Zipper to zipper expansion (up to 2" or 5 cm)',
    " Retractable top and side grab handles",
    " Bottom grab handle",
    " 3-stage telescoping handle",
    " 4 dual spinner wheels",
    " Molded impact-resistant side panels",
    " Protective bumper rails",
    " Built in USB-C charging port (supports up to 65W USB-C 2.0 cables and fast charging up to 65W 3A)",
    " Built-in TSA combination lock",
    " TUMI Tracer®",
  ],
  interiorFeatures: [
    "Zip divider",
    " Hanging mesh zipper pocket with removable USB cable",
    " Large mesh zip pocket",
    " 3 zip pockets",
    " Removable garment sleeve with fiberglass rod (holds 1 suit)",
    " Zip pocket on removable garment sleeve",
    " Hanger bracket",
    " Hanger in picture may be purchased separately (#0052)",
  ],
  luggageSize: "Continental Carry-On",
  isVideoAvailable: null,
  pdpVideoId: null,
  grandCollection: "Alpha",
  keywords: null,
  wholesaleLongDescription: null,
  handleDropLengthInches: null,
  handleDropLengthCms: null,
  shoulderStrapDropLengthInches: null,
  shoulderStrapDropLengthCms: null,
  shoulderStrapTotalLengthInches: null,
  productFeatureIcons: [],
  approved: true,
  hangTag: null,
  grossWeightLbs: "15.000",
  netWeightKg: null,
  grossWeightKg: null,
  heightInches: "22.0",
  cubeSetInchesDimensions: "",
  widthInches: "16.0",
  depthInches: "9.0",
  heightCms: "56.0",
  cubeSetCmDimensions: "",
  widthCms: "40.5",
  depthCms: "23.0",
  laptopHeightInches: "0.000",
  laptopWidthInches: "0.000",
  laptopDepthInches: "0.000",
  laptopHeightCms: "0.000",
  laptopWidthCms: "0.000",
  laptopDepthCms: "0.000",
  laptopSize: null,
  customizable: null,
  deliveryTime: null,
  capacity: null,
  expansionInches: "11.000",
  expansionCms: "28.000",
  taxCode: null,
  wheels: null,
  summary: null,
  primaryMaterial: "Ballistic Nylon",
  turntoAverageRating: 4.6,
  turntoReviewCount: 4,
  turntoRelatedReviewCount: 109,
  turntoCommentCount: 170,
  styleVariant: "1171612693",
  sizeVariant: "01171612693",
  size: null,
  color: "Black/Gold",
  colorFamily: "Black",
  sizeDesc: null,
  material: "117161",
  gridValue: "2693",
  countryOfOrigin: "CN",
  shoulderStrap: "0.00",
  handleDropLen: "0.00",
  NRFColorCode: "001",
  lengthInches: "9.000",
  dimUnit: '"',
  netWeightLb: "11.102",
  weightUnit: "LB",
  packageHeight: "12.000",
  packageWidth: "18.000",
  packageLength: "24.000",
  packageDimUnit: "IN",
  packagingWeightUnit: "LB",
  premiumTagSize: "01",
  airlineGuideEligible: false,
  dimensions: null,
  expandedDepth: null,
  premiumPatchSize: "01",
  tsaLock: "Zipper Lock - Travel Sentry",
  tsaLockType: "Dual Integrated Lock",
  tumiTracer: true,
  availableForInStorePickup: null,
  isDonationSKU: false,
  p360assetID: null,
  p360enable: false,
  innovationsWebContent: ["FXT Ballistic Nylon", "X-Brace 45 Handle"],
  isProductOnBackOrder: false,
  isBackOrderWithDateOutOfThreshold: false,
  styleDescription: "Style",
  isInStock: true,
  isPreOrderFlagSetForOOSproduct: false,
  isBackOrderFlagSetForOOSproduct: false,
  ENRUnitedEmployeesOnly: false,
  productHavingOnlyColorVariationAttribute: true,
  item_category: "Collections",
  item_category2: "Collections",
  item_category3: "Alpha",
  item_category4: "",
  item_category5: "",
  collectionUrl: "https://www.tumi.com/c/alpha/",
  isBopisDisabled: false,
  canonicalSKU: "01171611041",
  fitAndSizingTabContent: false,
  discountLineItems: [],
  isMonogramInLineItem: false,
  isPremiumMonogrammedPLI: false,
  isPremiumMonogramLetter: false,
  isWalletMonogramLineItem: false,
  isLaserEtchingMonogramLineItem: false,
  enableLaserEtchingMonogram: false,
  isLaserEtchingMonogram: false,
  laserEtchingSymbolList: ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)"],
  laserEtchingFontList: ["Times New Roman Bold", "Futura"],
  laserEtchingMonogramImage: null,
  laserMonoPatchImage: "https://tumi.scene7.com/is/image/Tumi/1171612693_patch",
  monogramSymbolList: ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)"],
  fontList: ["Times New Roman Bold", "Futura"],
  BlindEmbossOnly: false,
  colorData: [
    {
      colorDisplayValue: "Silver",
      colorHex: "CCCCCC",
      swatchURL: "http://s7d2.scene7.com/is/image/Tumi/SilverSwatch",
    },
  ],
  monogramLuggageTag: true,
  monogramable: true,
  monogramPatch: true,
  isPlacementOption: true,
  maximumtwoCharactersClassicMonogram: false,
  walletMonogram: false,
  placementOption: "classic-both",
  monoPatchImage: "https://tumi.scene7.com/is/image/Tumi/1171612693_patch",
  monoTagImage: "https://tumi.scene7.com/is/image/Tumi/1171612693_tag",
  monoTagWalletImage: "https://tumi.scene7.com/is/image/Tumi/new_wallet_T",
  isPremium: true,
  isPremiumTag: true,
  isPremiumPatch: true,
  premiumMonogramSymbolList: ["(8)", "(9)"],
  isPremiumMonogramSelectable: true,
  premiumMonogramPatchLookupTable:
    '[{"Type":"PATCH","Size":"03","SizeOnOrder":"L","ColorOnOrder":"Black","productCodeonOrder":30316881041,"LettersInUI":2},{"Type":"PATCH","Size":"04","SizeOnOrder":"L","ColorOnOrder":"Brown","productCodeonOrder":30316881139,"LettersInUI":2},{"Type":"PATCH","Size":"01","SizeOnOrder":"S","ColorOnOrder":"Black","productCodeonOrder":30316871041,"LettersInUI":2},{"Type":"PATCH","Size":"02","SizeOnOrder":"S","ColorOnOrder":"Brown","productCodeonOrder":30316871139,"LettersInUI":2},{"Type":"PATCH","Size":"06","SizeOnOrder":"XS","ColorOnOrder":"Black","productCodeonOrder":30331681041,"LettersInUI":2},{"Type":"PATCH","Size":"05","SizeOnOrder":"","ColorOnOrder":"","productCodeonOrder":"N/A","LettersInUI":0},{"ColorOnOrder":"Burning Bridle","LettersInUI":2,"productCodeonOrder":"3033168A529","Size":"07","SizeOnOrder":"XS","Type":"PATCH"},{"ColorOnOrder":"Burning Bridle","LettersInUI":2,"productCodeonOrder":"3031687A529","Size":"08","SizeOnOrder":"S","Type":"PATCH"},{"ColorOnOrder":"Burning Bridle","LettersInUI":2,"productCodeonOrder":"3031688A529","Size":"09","SizeOnOrder":"L","Type":"PATCH"}]',
  premiumMonogramTagLookupTable:
    '[{"Type":"TAG","Size":"01","SizeOnOrder":"L","ColorOnOrder":"Black","productCodeonOrder":"30316891041","LettersInUI":2},{"Type":"TAG","Size":"02","SizeOnOrder":"L","ColorOnOrder":"Brown","productCodeonOrder":"30316891139","LettersInUI":2},{"Type":"TAG","Size":"03","SizeOnOrder":"S","ColorOnOrder":"Black","productCodeonOrder":"30316901041","LettersInUI":2},{"Type":"TAG","Size":"04","SizeOnOrder":"S","ColorOnOrder":"Brown","productCodeonOrder":"30316901139","LettersInUI":2},{"Type":"TAG","Size":"06","SizeOnOrder":"XS","ColorOnOrder":"Black","productCodeonOrder":"30333371041","LettersInUI":2},{"Type":"TAG","Size":"07","SizeOnOrder":"XS","ColorOnOrder":"Brown","productCodeonOrder":"30333371139","LettersInUI":2},{"Type":"TAG","Size":"05","SizeOnOrder":"","ColorOnOrder":"","productCodeonOrder":"N/A","LettersInUI":0},{"ColorOnOrder":"Burning Bridle","LettersInUI":2,"productCodeonOrder":"3031689A529","Size":"08","SizeOnOrder":"L","Type":"TAG"},{"ColorOnOrder":"Burning Bridle","LettersInUI":2,"productCodeonOrder":"3031690A529","Size":"09","SizeOnOrder":"S","Type":"TAG"}]',
  premiumMonogramLetterCount: 2,
  premiumMonogramLetterCost: "Enter at least one letter, $15.00 per letter.",
  isEmbroidery: false,
  enableEmbroidery: false,
  isEmbroideryInLineItem: false,
  complimentaryGiftBox: false,
  giftMessage: "",
  senderName: "",
  recipientName: "",
  premiumGiftBox: false,
  noGiftBox: false,
  giftBoxUUID: false,
  parentProductLineItemID: false,
  isPhysicalGiftCard: false,
  premiumGiftBoxPrice: "",
  giftBoxEnableLineitem: "",
  isGiftBoxEditable: false,
  giftBoxlabel: "Gift Options",
  giftBoxPrice: null,
  isDigitalGiftCard: false,
  enablePFASCompliance: false,
  reqGeoLocationRegionCode: "NJ",
  isProductHavingPFASComplianceInventory: false,
  isProductNonPFASCompliance: false,
  PdpPfasComplianceMessage: null,
  CartPfasComplianceMessage: null,
  CheckoutPfasComplianceMessage: null,
  shipmentType: null,
  backInStockSoon: false,
  backInStock: false,
  onlyFewLeft: false,
  comingSoon: false,
  newlyAddedProduct: false,
  activeProductBadge: "Top Rated Product",
  productAvailability: null,
  availableForShipToHome: true,
  bonusProducts: null,
};
/**
 * Parse string representation of array
 * @param {Array} allLineItemsEmarsysPayload - allorderLineItems
 * @param {Array} consignmentItems - consignmentItems
 * @param {Array} allProductLineItems - consignmentItems
 * @return {Array} - parsed array (null for parse error)
 */
function addShippingSpecificAttributes() {
  var result = {
    delivered: true,
    StockFlag: "In Stock",
    ProductName: "Celina Backpack",
    ProductImage: "https://tumi.scene7.com/is/image/Tumi/1465662693_main?wid=1020&hei=1238",
    ItemGiftBoxPrice: 0,
    ProductPrice: "475.00",
    Unit: 1,
    ItemNumber: "01465662693",
    Currency: "USD",
    trackingnumber: "",
    ItemSaleDiscountAmount: "20.00",
    ProductColor: "Red",
    ItemSubtotal: "475.00",
    trackingurl: "",
    Quantity: 1,
    GiftMessage: "Gift for You",
    ColorAccentsColor: "",
    ProductSize: "",
    GiftBoxFlag: true,
    backorderdate: "",
    MonogramLetters: "A",
    MonogramLetters2: "B",
    MonogramLetters3: "C",
    MonogramFontColor: "Gold",
    MonogramFontStyle: "Comic Sans",
    MonogramTagLetters: "A",
    MonogramTagLetters2: "B",
    MonogramTagLetters3: "C",
    MonogramTagFontColor: "Gold",
    MonogramTagFontStyle: "Comic Sans",
    classicMonogram1: "A",
    classicMonogram2: "B",
    classicMonogram3: "C",
    classicMonogramPrice: "100",
    MetalMonogram1: "A",
    MetalMonogram2: "B",
    MetalMonogram3: "C",
    MetalMonogramPrice: "100.00",
    Embroidery1: "A",
    Embroidery2: "B",
    Embroidery3: "C",
    EmbroideryPrice: "100.00",
    OriginalPrice: "475.00",
    Promomessage: "PromoMessage",
    CollectionName: "Celina",
    sizeToCut: "42",
    ...producLineItem,
  };

  result.UUID = "aa299-393938-aa-ee21-223";
  result.consignmentID = "82828888aa";
  result.InThisShipment = false;
  result.accentPrice = "113.42";
  result.ShipDate = "Wed Jul 28 1993";

  return result;
}
/**
 * Parse string representation of array
 * @param {string} Items - ProductLineItems
 * @param {string} consignmentID - ProductLineItems
 * @return {Array} - parsed array (null for parse error)
 */
function filterOrderProducts(Items) {
  var tumiHelpers = require("*/cartridge/scripts/helpers/tumiHelpers");
  var digitalGiftCardProductID = tumiHelpers.getSitePrefFromCache(
    "digitalGiftCardProductID"
  );
  var productLineItems = [];
  Items.forEach(function (productLineItem) {
    var isLetterProduct =
      "isPremiumMonogramLetter" in productLineItem.custom &&
      !!productLineItem.custom.isPremiumMonogramLetter;
    if (
      !isLetterProduct &&
      productLineItem.optionID !== "Embroidery" &&
      productLineItem.optionID !== "sizeToCut" &&
      productLineItem.productID !== digitalGiftCardProductID
    )
      productLineItems.push(productLineItem);
  });
  return productLineItems;
}
/**
 * returns total discount at consignment Level
 * @param {string} productLineItems - totalProductLineItems
 * @return {Integer} - total discount Amount
 */
function getProductLevelTotalDiscount(productLineItems) {
  var collections = require("*/cartridge/scripts/util/collections");
  var adjustment = 0;
  if (productLineItems.length === 0) return adjustment;
  productLineItems.forEach(function (productLineItem) {
    collections.forEach(
      productLineItem.priceAdjustments,
      function (priceAdjustment) {
        adjustment += priceAdjustment.netPrice.value;
      }
    );
  });
  return Math.abs(adjustment);
}
/**
 * Parse string representation of array
 * @param {string} allProductLineItems - allProductLineItems
 * @param {string} entrycode - entrycode
 * @return {Array} - parsed array (null for parse error)
 */
function getreturnProductShipment(allProductLineItems, entrycode) {
  var collections = require("*/cartridge/scripts/util/collections");
  var producttoReturn = collections.find(
    allProductLineItems,
    function (ProductLineItem) {
      return (
        ProductLineItem.custom && ProductLineItem.custom.entryCode === entrycode
      );
    }
  );
  return producttoReturn;
}
/**
 * creating an string of payment methods
 * @param {collection} paymentInstruments - collection of paymentInstruments
 * @return {string} - string with paymentmethods comma seprated
 */
function getPaymentMethods(paymentInstruments) {
  if (!paymentInstruments) return "";
  var methods = [];
  var collections = require("*/cartridge/scripts/util/collections");
  collections.forEach(paymentInstruments, function (paymentInstrument) {
    if (paymentInstrument && paymentInstrument.paymentMethod) {
      if (paymentInstrument.paymentMethod === "CREDIT_CARD") {
        var creditCard =
          "Card: " +
          paymentInstrument.creditCardType +
          " " +
          paymentInstrument.creditCardNumberLastDigits;
        methods.push(creditCard);
      } else {
        methods.push(paymentInstrument.paymentMethod);
      }
    }
  });
  return !empty(methods) ? methods.toString() : "";
}
/**
 * Parse string representation of array
 * @param {string} vasEntries - vasEntries of a productLineItem
 * @return {number} - sum of metal Letters price
 */
function getMetalLettersPrice(vasEntries) {
  var metalPrice = 0;
  vasEntries.forEach(function (vasEntry) {
    if (vasEntry.totalPrice) {
      metalPrice += vasEntry.totalPrice;
    }
  });
  return metalPrice;
}

/**
 * Parse string representation of array
 * @param {string} optionProductLineItems - productlineItems of order level
 * @return {number} - Embrioderyprice
 */
function getEmbrioderPrice(optionProductLineItems) {
  var collections = require("*/cartridge/scripts/util/collections");
  if (optionProductLineItems.length < 1) return "";

  var embrioderyLineItem = collections.find(
    optionProductLineItems,
    function (optionProductLineItem) {
      return optionProductLineItem.optionID === "Embroidery";
    }
  );
  if (!embrioderyLineItem) return " ";

  return embrioderyLineItem.netPrice ? embrioderyLineItem.netPrice.value : "";
}
/**
 * Parse string representation of array
 * @param {string} priceAdjustments - list of price adjustments
 * @return {string} -list of PromotionId's
 */
function getPromoMessages(priceAdjustments) {
  if (!priceAdjustments) return "";
  var listofPromotionIDs = [];
  var collections = require("*/cartridge/scripts/util/collections");
  collections.forEach(priceAdjustments, function (priceAdjustment) {
    listofPromotionIDs.push(priceAdjustment.promotionID);
  });
  return listofPromotionIDs.toString();
}

/**
 * Parse string representation of array
 * @param {string} productLineItem - productlineItem of order level
 * @param {string} currencyCode - currencyCode
 * @param {string} addUUIdandConsignmentId - currencyCode
 * @return {Array} - parsed array (null for parse error)
 */
function getProductItemShippingEmailPayload(
  productLineItem,
  currencyCode,
  addUUIdandConsignmentId
) {
  var collections = require("*/cartridge/scripts/util/collections");
  var locale = Site.getCurrent().defaultLocale;
  var ImageModel = require("*/cartridge/models/product/productImages");
  var product = productLineItem.product;
  var image = new ImageModel(product, { types: ["small"], quantity: "all" });
  var discount = 0;

  var vasMonogramAttributes = productLineItem.custom.monogramDataOnPLI
    ? JSON.parse(productLineItem.custom.monogramDataOnPLI)
    : false;
  var vasEntries = vasMonogramAttributes;
  var vasEntry = false;

  var monoPatch =
    vasEntries && vasEntries[0].productCode === "MONOPATCH"
      ? vasEntries[0]
      : vasEntries[1];
  var monoTag =
    vasEntries && vasEntries[0].productCode === "MONOTAG"
      ? vasEntries[0]
      : vasEntries[1];
  var isPremiumMonogram = productLineItem.custom.isPremiumMonogram;
  var monoPatchLetters =
    monoPatch && monoPatch.character ? monoPatch.character.split(" ") : false;
  var monoTagLetters =
    monoTag && monoTag.character ? monoTag.character.split(" ") : false;
  var embrioderyData =
    productLineItem.custom && productLineItem.custom.embroideryDataOnPLI
      ? JSON.parse(productLineItem.custom.embroideryDataOnPLI)
      : null;
  var sizeToCutData = getSizeToCutOption(productLineItem);
  var embrioderyLetters = null;
  if (
    embrioderyData &&
    embrioderyData.embroidery &&
    embrioderyData.embroidery.embroideryText
  ) {
    if (embrioderyData.embroidery.embroideryText.includes(")")) {
      embrioderyLetters = embrioderyData.embroidery.embroideryText.split(" ");
    } else {
      embrioderyLetters = embrioderyData.embroidery.embroideryText
        .replace(/\s/g, "")
        .split("");
    }
  }
  collections.forEach(
    productLineItem.priceAdjustments,
    function (priceAdjustment) {
      discount += Math.abs(priceAdjustment.price.value);
    }
  );
  if (vasEntries) {
    vasEntry = vasEntries.filter(function (entries) {
      return Object.hasOwnProperty.call(entries, "vasField1");
    });
  }
  var pricebook = locale === "en_US" ? "usd-list-prices" : "cad-list-prices";
  var listprice = productLineItem.product
    ? productLineItem.product
        .getPriceModel()
        .getPriceBookPrice(pricebook)
        .getValue()
    : null;
  var MonogramLetters = null;
  if (vasEntry && vasEntry[0] && vasEntry[0].vasField1) {
    if (vasEntry[0].vasField1.includes(")")) {
      MonogramLetters = vasEntry[0].vasField1.split(" ");
    } else {
      MonogramLetters = vasEntry[0].vasField1.replace(/\s/g, "").split("");
    }
  }
  var isDelivered = true;
  var result = {
    delivered: isDelivered,
    StockFlag: "In Stock",
    ProductName: "Continental Dual Access 4 Wheeled Carry-On",
    ProductImage:
      "https://tumi.scene7.com/is/image/Tumi/1171612693_main?wid=282&hei=282",
    ItemGiftBoxPrice: 0,
    ProductPrice: "111.22",
    Unit: 1,
    ItemNumber: "01171612693",
    Currency: "USD",
    trackingnumber: "",
    ItemSaleDiscountAmount: "9.99",
    ProductColor: "Black",
    ItemSubtotal: productLineItem.adjustedPrice.value,
    trackingurl: "",
    Quantity: productLineItem.quantityValue,
    GiftMessage: productLineItem.giftMessage,
    ColorAccentsColor: "",
    ProductSize: "",
    GiftBoxFlag: productLineItem.isGift,
    backorderdate: "",
    MonogramLetters: "A",
    MonogramLetters2: "B",
    MonogramLetters3: "C",
    MonogramFontColor: "red",
    MonogramFontStyle: monoPatch && monoPatch.font ? monoPatch.font : "",
    MonogramTagLetters: monoTagLetters[0] ? monoTagLetters[0] : "",
    MonogramTagLetters2: monoTagLetters[1] ? monoTagLetters[1] : "",
    MonogramTagLetters3: monoTagLetters[2] ? monoTagLetters[2] : "",
    MonogramTagFontColor: monoTag && monoTag.color ? monoTag.color : "",
    MonogramTagFontStyle: monoTag && monoTag.font ? monoTag.font : "",
    classicMonogram1: "A",
    classicMonogram2: "B",
    classicMonogram3: "C",
    classicMonogramPrice: 0,
    MetalMonogram1:
      isPremiumMonogram && MonogramLetters && MonogramLetters[0]
        ? MonogramLetters[0]
        : "",
    MetalMonogram2:
      isPremiumMonogram && MonogramLetters && MonogramLetters[1]
        ? MonogramLetters[1]
        : "",
    MetalMonogram3:
      isPremiumMonogram && MonogramLetters && MonogramLetters[2]
        ? MonogramLetters[2]
        : "",
    MetalMonogramPrice:
      isPremiumMonogram && vasEntries ? getMetalLettersPrice(vasEntries) : "",
    Embroidery1:
      embrioderyLetters && embrioderyLetters[0] ? embrioderyLetters[0] : "",
    Embroidery2:
      embrioderyLetters && embrioderyLetters[1] ? embrioderyLetters[1] : "",
    Embroidery3:
      embrioderyLetters && embrioderyLetters[2] ? embrioderyLetters[2] : "",
    EmbroideryPrice: embrioderyLetters
      ? getEmbrioderPrice(productLineItem.optionProductLineItems)
      : "",
    OriginalPrice: listprice || "",
    Promomessage: productLineItem.priceAdjustments
      ? getPromoMessages(productLineItem.priceAdjustments)
      : "",
    CollectionName:
      product && product.custom ? product.custom.grandCollection : "",
    sizeToCut:
      sizeToCutData && sizeToCutData.sizeToCutPresnt
        ? sizeToCutData.sizeId
        : "",
  };
  if (addUUIdandConsignmentId) {
    result.UUID = productLineItem.getUUID();
    result.consignmentID =
      productLineItem.custom && productLineItem.custom.consignmentID
        ? productLineItem.custom.consignmentID
        : null;
  }
  return result;
}

/**
 * @param {string} productLineItem - productlineItem of order level
 * @param {string} currencyCode - currencyCode
 * @return {Object} - object
 */
function getProductItem(productLineItem, currencyCode) {
  var collections = require("*/cartridge/scripts/util/collections");
  var ImageModel = require("*/cartridge/models/product/productImages");
  var product = productLineItem.product;
  var image = new ImageModel(product, { types: ["small"], quantity: "all" });

  var discount = 0;

  var vasMonogramAttributes = productLineItem.custom.monogramDataOnPLI
    ? JSON.parse(productLineItem.custom.monogramDataOnPLI)
    : false;
  var vasEntries = vasMonogramAttributes;

  var monoPatch =
    vasEntries && vasEntries[0].productCode === "MONOPATCH"
      ? vasEntries[0]
      : vasEntries[1];
  var monoTag =
    vasEntries && vasEntries[0].productCode === "MONOTAG"
      ? vasEntries[0]
      : vasEntries[1];
  var monoPatchLetters =
    monoPatch && monoPatch.character ? monoPatch.character.split(" ") : false;
  var monoTagLetters =
    monoTag && monoTag.character ? monoTag.character.split(" ") : false;
  var sizeToCutData = getSizeToCutOption(productLineItem);
  collections.forEach(
    productLineItem.priceAdjustments,
    function (priceAdjustment) {
      discount += Math.abs(priceAdjustment.price.value);
    }
  );

  return {
    StockFlag: "In Stock",
    ProductName: productLineItem.productName,
    ProductImage: image.small[0].url,
    ItemGiftBoxPrice: 0,
    ProductPrice: productLineItem.getAdjustedNetPrice().value,
    Unit: productLineItem.product.unit,
    ItemNumber: productLineItem.productID,
    Currency: currencyCode,
    trackingnumber: "",
    ItemSaleDiscountAmount: discount,
    ProductColor: product.custom.color,
    ItemSubtotal: productLineItem.adjustedPrice.value,
    trackingurl: "",
    Quantity: productLineItem.quantityValue,
    GiftMessage: productLineItem.giftMessage,
    ColorAccentsColor: "",
    ProductSize: "",
    GiftBoxFlag: productLineItem.isGift,
    backorderdate: "",
    MonogramLetters: monoPatchLetters[0] ? monoPatchLetters[0] : "",
    MonogramLetters2: monoPatchLetters[1] ? monoPatchLetters[1] : "",
    MonogramLetters3: monoPatchLetters[2] ? monoPatchLetters[2] : "",
    MonogramFontColor: monoPatch && monoPatch.color ? monoPatch.color : "",
    MonogramFontStyle: monoPatch && monoPatch.font ? monoPatch.font : "",
    MonogramTagLetters: monoTagLetters[0] ? monoTagLetters[0] : "",
    MonogramTagLetters2: monoTagLetters[1] ? monoTagLetters[1] : "",
    MonogramTagLetters3: monoTagLetters[2] ? monoTagLetters[2] : "",
    MonogramTagFontColor: monoTag && monoTag.color ? monoTag.color : "",
    MonogramTagFontStyle: monoTag && monoTag.font ? monoTag.font : "",
    sizeToCut:
      sizeToCutData && sizeToCutData.sizeToCutPresnt
        ? sizeToCutData.sizeId
        : "",
  };
}

/**
 * Parse string representation of array
 * @param {string} items - ProductLineItems
 * @param {string} currencyCode - currenycCode
 * @param {string} emarsysShippingEmailSent - flag for identyfying emarsysShippingemail
 * @param {string} addUUIdandConsignmentId - flag for identyfying addUUIdandconsignmentId
 * @return {Array} - parsed array (null for parse error)
 */
function getProductItems(
  items,
  currencyCode,
  emarsysShippingEmailSent,
  addUUIdandConsignmentId
) {
  var result = [];
  if (emarsysShippingEmailSent) {
    items.forEach(function (productLineItem) {
      result.push(
        getProductItemShippingEmailPayload(
          productLineItem,
          currencyCode,
          addUUIdandConsignmentId
        )
      );
    });
  } else {
    items.forEach(function (productLineItem) {
      result.push(getProductItem(productLineItem, currencyCode));
    });
  }
  return result;
}

/**
 * @param {string} address - address
 * @param {string} email - email
 * @return {Object} - Object
 */
function getAddress(address, email) {
  return {
    address: {
      Email: email,
      FirstName: address.firstName,
      StateProvince: address.stateCode,
      PhoneNumber: address.phone,
      PostalCode: address.postalCode,
      Country: address.countryCode.displayValue,
      LastName: address.lastName,
      City: address.city,
      StreetAddress2: address.address2,
      StreetAddress1: address.address1,
    },
    emptyAddress: {
      Email: "",
      FirstName: "",
      StateProvince: "",
      PhoneNumber: "",
      PostalCode: "",
      Country: "",
      LastName: "",
      City: "",
      StreetAddress2: "",
      StreetAddress1: "",
    },
  };
}

/**
 * @description Get gender name
 * @param {*} GenderValueCodes Gender value codes
 * @param {*} Profile current profile
 * @param {Object} FieldValueMapping Object to retrieve data from
 * @param {string} attributeId attribute Id
 * @return {string} name gender
 */
function getGenderName() {
  return "F";
}

/**
 * @description Get country name
 * @param {Object} CountryValueCodes Country value codes
 * @param {Object} Address address
 * @param {Object} FieldValueMapping Object to retrieve data from
 * @param {string} attributeId attribute Id
 * @return {string} name country
 */
function getCountryName(
  CountryValueCodes,
  Address,
  FieldValueMapping,
  attributeId
) {
  // eslint-disable-line no-unused-vars
  if (
    "countryCode" in Address &&
    !empty(Address.countryCode.displayValue) &&
    Address.countryCode.displayValue in CountryValueCodes
  ) {
    var countryCode = CountryValueCodes[Address.countryCode.displayValue];
    var countryValue = "";

    Object.keys(FieldValueMapping[attributeId]).forEach(function (key) {
      var country = FieldValueMapping[attributeId][key];
      if (country.value === countryCode) {
        countryValue = country.choice;
      }
    }, this);
    return countryValue;
  }
  return "";
}

/**
 * @description get SingleChoiceFieldValue
 * @param {Object} FieldValueMapping Object to retrieve data from
 * @param {Object} Field Field
 * @param {string} assignedValue assignedValue
 * @return {string} value
 */
function getSingleChoiceFieldValue(FieldValueMapping, Field, assignedValue) {
  var attributeValue = "";
  if (assignedValue) {
    var listOfValues = []; // list of all possible values for specified field

    if (FieldValueMapping[Field.field]) {
      listOfValues = FieldValueMapping[Field.field];
    }

    var hasOtherValue = false; // flag to find if 'Other' value is present among all possible values
    var otherValue = "";
    if (listOfValues.length > 0) {
      Object.keys(listOfValues).forEach(function (key) {
        var value = listOfValues[key];
        if (assignedValue.toLowerCase() === value.choice.toLowerCase()) {
          attributeValue = value.choice;
        } else if (value.choice.toLowerCase() === "other") {
          hasOtherValue = true;
          otherValue = value.choice;
        }
      }, this);
    } else {
      return assignedValue;
    }

    if (!attributeValue && hasOtherValue) {
      attributeValue = otherValue;
    }
  }

  return attributeValue;
}

/**
 * @description Get attribute value
 * @param {Object} Address address
 * @param {Object} Profile current profile
 * @param {Object} Field field
 * @param {Object} CountryValueCodes Country value codes
 * @param {Object} GenderValueCodes Gender value codes
 * @param {Object} FieldValueMapping Object to retrieve data from
 * @param {function} getValues getValues function
 * @return {string} attribute value
 */
function getAttributeValue(
  Address,
  Profile,
  Field,
  CountryValueCodes,
  GenderValueCodes,
  FieldValueMapping,
  getValues
) {
  var attributeName = Field.placeholder;
  var attributeValue = "";
  var attributeId = Field.field;
  if (attributeName === "gender") {
    attributeValue = getGenderName(
      GenderValueCodes,
      Profile,
      FieldValueMapping,
      attributeId
    );
  } else if (attributeName === "countryCode") {
    // attributeValue = getCountryName(CountryValueCodes, Address, FieldValueMapping, attributeId);
    attributeValue = Address.countryCode.displayValue;
  } else if (attributeName.split(".")[0] === "custom") {
    var assignedValue = getValues(attributeName, Profile, 0);
    attributeValue = getSingleChoiceFieldValue(
      FieldValueMapping,
      Field,
      assignedValue
    );
  } else if (attributeName in Address && !empty(Address[attributeName])) {
    if (attributeName === "address1") {
      attributeValue =
        Address[attributeName] +
        (Address.address2 !== null ? " " + Address.address2 : "");
    } else {
      attributeValue = Address[attributeName];
    }
  } else if (attributeName in Profile && !empty(Profile[attributeName])) {
    if (attributeName === "birthday") {
      var birthday =
        Profile[attributeName].getFullYear().toFixed() +
        "-" +
        (Profile[attributeName].getMonth() + 1).toFixed() +
        "-" +
        Profile[attributeName].getDate().toFixed();

      attributeValue = birthday;
    } else {
      attributeValue = Profile[attributeName];
    }
  }

  return attributeValue;
}
/**
 * returns whether the contact should be registred to emarsys
 * @param {string} endpoint - list of price adjustments
 * @param {Object} requestBody - list of price adjustments
 */
function registerEmarsysContact(endpoint, requestBody) {
  var eventsHelper = require("*/cartridge/scripts/helpers/triggerEventHelper");
  var tocallContactServive = false;
  if (
    !requestBody.external_id ||
    endpoint === "contact/?create_if_not_exists=1"
  )
    return;
  var emarsysRegistrationEnable = TumiHelper.isFeatureEnable(
    "emarsysRegistration"
  );
  if (
    endpoint !== "contact/?create_if_not_exists=1" &&
    emarsysRegistrationEnable &&
    emarsysRegistrationEnable.enableEmarsysContactRegistration === true &&
    emarsysRegistrationEnable.PiplineToCover
  ) {
    var allEnpoints = emarsysRegistrationEnable.PiplineToCover;
    if (allEnpoints && allEnpoints.length > 0) {
      allEnpoints.forEach(function (pipeLine) {
        if (
          request.httpPath &&
          request.httpPath.toString().indexOf(pipeLine) > -1
        )
          tocallContactServive = true;
      });
    }
  }
  if (tocallContactServive && requestBody.external_id)
    eventsHelper.createAccountIfNotExist(requestBody.external_id);
}

const emarsysHelper = {
  /**
   * @description Triggers API call
   * @param {string} endpoint - the endpoint to use when generating urls
   * @param {Object} requestBody - the request object
   * @param {string} requestMethod - method GET/POST/...
   * @return {Object} service Call
   */
  triggerAPICall: function (endpoint, requestBody, requestMethod) {
    var service = require("*/cartridge/scripts/service/emarsysService");
    registerEmarsysContact(endpoint, requestBody);
    return service.call(endpoint, requestBody, requestMethod);
  },

  triggerTimeOutAPICall: function (endpoint, requestBody, requestMethod) {
    var service = require("*/cartridge/scripts/service/emarsysService");
    registerEmarsysContact(endpoint, requestBody);
    return service.lesserTimeOutServiceCall(
      endpoint,
      requestBody,
      requestMethod
    );
  },
  /**
   * @description Get sourceId
   * @param {Object} callResult - result call request
   * @param {string} name - name source
   * @return {string} soursId
   */
  getSourceId: function (callResult, name) {
    var dataObj = JSON.parse(callResult.object);
    var sources = dataObj.data;
    var sourceId;

    for (var i = 0; i < sources.length; i += 1) {
      var source = sources[i];
      if (source.name === name) {
        sourceId = source.id;
        break;
      }
    }
    return sourceId;
  },

  /**
   * @description Add new fields
   * @param {Object} map - Object to retrieve data from
   * @param {Object} requestBody - The request object
   * @return {void}
   */
  addFields: function (map, requestBody) {
    var reqBody = requestBody;
    if (map) {
      // add new fields
      Object.keys(map).forEach(function (key) {
        if (key === "5") {
          reqBody[key] = this.convertGenderCode(map[key]);
        } else if (key === "14") {
          reqBody[key] = this.convertCountryCode(map[key]);
        } else if (map[key]) {
          reqBody[key] = map[key];
        }
      }, this);
    }
  },

  /**
   * @description Method adds object's specified keys' values to map object which is used to populate request body sent to emarsys
   * @param {Object} object Object to retrieve data from
   * @param {Object} map Object to add data to
   */
  addDataToMap: function (object, map) {
    // read site preference value with emarsys ids for fields
    var emarsysIdsMap = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysContactFieldsMap")
    );
    var newMap = map;

    Object.keys(emarsysIdsMap).forEach(function (element) {
      var value = null;
      value = this.getValues(emarsysIdsMap[element], object, 0);

      if (value && typeof value === "object") {
        value = value.value;
      }

      if (value) {
        newMap[element] = value;
      }
    }, this);

    // if addres2 property is not null add it to the address field
    if ("address2" in object && object.address2) {
      newMap["10"] += ", " + object.address2;
    }
  },

  /**
   * @description Method adds Address object's specified keys' values to map object which is used to populate request body sent to emarsys
   * @param {Object} object Object to retrieve data from
   * @param {Object} map Object to add data to
   * @param {Int} i Int address counter
   */
  addAddressDataToMap: function (object, map, i) {
    var emarsysIdsMap = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysAddressFieldsMap")
    );
    var newMap = map;

    Object.keys(emarsysIdsMap[i]).forEach(function (element) {
      var value = null;
      value = this.getValues(emarsysIdsMap[i][element], object, 0);

      if (typeof value === "object") {
        value = value.value;
      }

      if (value) {
        newMap[element] = value;
      }
    }, this);
  },

  /**
   * @description Returns country code object
   * @param {string} countryCode - specific country code
   * @return {Object} coutnry code
   */
  convertCountryCode: function (countryCode) {
    var countryCodes = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysCountryCodes")
    );
    return countryCodes[countryCode.toLowerCase()];
  },

  /**
   * @description returns gender code object
   * @param {string} gender - specific gender code
   * @return {Object} gender codes
   */
  convertGenderCode: function (gender) {
    var genderCodes = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysGenderCodes")
    );
    return genderCodes[gender];
  },

  /**
   * @description  This function transforms the field string into an object
   * and iterates through the object parameter to find values. If you only have one attribute to go through, use skipLoop = 1;
   * @param {string} field - Current field
   * @param {Object} object - Object to retrieve data from
   * @param {number} skipLoop - Number skip loop
   * @return {string} Attributtes
   */
  getValues: function (field, object, skipLoop) {
    if (!empty(field)) {
      var toObject = field.split(".");
      var attributes = "";

      if (skipLoop === 0 && toObject[0] in object) {
        attributes = object[toObject[0]];
      }

      if (skipLoop === 1 && toObject[1] in object) {
        attributes = object[toObject[1]];
      }

      toObject.forEach(function (val, key) {
        if (skipLoop) {
          if (key !== 0 && key !== 1) {
            attributes = attributes[val];
          }
        } else if (key !== 0) {
          attributes = val in attributes ? attributes[val] : "";
        }
      }, this);

      if (attributes instanceof Money) {
        attributes = attributes.getValueOrNull() || "0";
      }

      // 23.10.18 : fix g.h. : Date Attribute for order.creationDate is wrong.
      if (attributes instanceof Date) {
        attributes = this.formatDate(attributes, "-", ":");
      }

      try {
        if (typeof attributes === "object") {
          attributes = attributes.value;
        }
      } catch (e) {
        attributes = attributes || "";
      }

      return attributes;
    }
    return null;
  },

  /**
   * @description Returns link to PDP
   * @param {Object} product - Current product
   * @returns {string} Current url or null
   */
  returnProductURL: function (product) {
    if (!empty(product)) {
      var pid = null;
      var cgid = null;
      if (product instanceof order.ProductLineItem) {
        pid = product.productID;
        cgid = product.categoryID;
      } else {
        var firstCategoryID = !empty(product.allCategories)
          ? product.allCategories[0].getID()
          : null;
        var primaryCategoryID = !empty(product.primaryCategory)
          ? product.primaryCategory.getID()
          : null;
        var classificationCategoryID = !empty(product.classificationCategory)
          ? product.classificationCategory.getID()
          : null;
        cgid = primaryCategoryID || classificationCategoryID || firstCategoryID;
        pid = product.ID;
      }
      var URLAction = new web.URLAction("Product-Show", Site.current.ID);
      var URLParameter = new web.URLParameter("pid", pid);
      var URL = web.URLUtils.https(URLAction, URLParameter);
      if (cgid) {
        URL.append("cgid", cgid);
      }
      return URL;
    }
    return null;
  },

  /**
   * @description Append the product to our product list
   * @param {Object} mappedFields - Object to retrieve data from
   * @param {Object} Order - Object to retrieve data from
   * @param {Object} dataObject - Object to add data to
   * @return {void}
   */
  appendProductInfo: function (mappedFields, Order, dataObject) {
    /**
     * @description Add product image url
     * @param {string} viewType - Image size
     * @param {Object} placeholder - Placeholder
     * @param {Object} productLineItem - ProductLineItem
     * @return {void}
     */
    function addProductImageUrl(viewType, placeholder, productLineItem) {
      var addProduct = {};
      addProduct[placeholder] =
        productLineItem.product.getImage(viewType) !== null
          ? productLineItem.product.getImage(viewType).getAbsURL().toString()
          : "";
    }

    if (mappedFields && Order && dataObject) {
      for (var i = 0; i < Order.shipments[0].productLineItems.length; i += 1) {
        // Needed vars
        var productLineItem = Order.shipments[0].productLineItems[i];
        var rebate = "";
        var url;

        // Get product URL
        url = this.returnProductURL(productLineItem);

        // Get product price adjustments
        rebate = this.returnProductRebate(productLineItem);

        // Add product
        var addProduct = {};

        for (var j = 0; j < mappedFields.length; j += 1) {
          var placeholder = mappedFields[j].placeholder;
          var field = mappedFields[j].field;
          var splitField = mappedFields[j].field.split(".");

          switch (splitField[0]) {
            case "product":
              if (splitField[1] === "url") {
                addProduct[placeholder] = url.toString();
              } else if (splitField[1] === "image") {
                var viewType = currentSite.getCustomPreferenceValue(
                  "emarsysProductImageSize"
                );
                addProductImageUrl(viewType, placeholder, productLineItem);
              } else if (splitField[1] === "rebate") {
                addProduct[placeholder] = rebate;
              } else {
                addProduct[placeholder] = this.getValues(
                  field,
                  productLineItem,
                  1
                );
              }
              break;

            case "productItemPrice":
              addProduct[placeholder] =
                productLineItem.proratedPrice.toFormattedString();
              break;

            case "productItemGrossPrice":
              addProduct[placeholder] = productLineItem.proratedPrice
                .add(productLineItem.adjustedTax)
                .toFormattedString();
              break;

            case "productItemTax":
              addProduct[placeholder] =
                productLineItem.adjustedTax.toFormattedString();
              break;
            default:
              break;
          }
        }

        dataObject.push(addProduct); // append the product to our product list
      }
    }
  },

  /**
   * @description This function adds order information to the JSON object sent to Emarsys
   * @param {Object} mappedFields - Object to retrieve data from
   * @param {Object} dataObject - Object to add data to
   * @param {Object} Order - Object to retrieve data from
   * @return {void}
   */
  appendGlobalMappedFieldsObject: function (mappedFields, dataObject, Order) {
    var newDataObject = dataObject;
    /**
     * @description Select placeholder
     * @param {Object} mappedField1 - To retrieve data from
     * @return {void}
     */
    function mappedField(mappedField1) {
      var placeholder = mappedField1.placeholder;
      var field = mappedField1.field;
      var splitField = mappedField1.field.split(".");

      switch (splitField[0]) {
        /*  Billing address
                    The available element should starts with 'billingAddress' and it should contain real attributes
                    in this way we get needed values from billingAddress object.
                    Examples: billingAddress.address1, billingAddress.postalCode, billingAddress.countryCode.displayValue, etc.
                */
        case "billingAddress":
          newDataObject[placeholder] = this.getValues(field, Order, 0);
          break;

        /*  Shipping address
                    The available element should starts with 'shippingAddress' and it should contain real attributes
                    in this way we get needed values from order.shipments[0].shippingAddress object.
                    Examples: shippingAddress.address1, shippingAddress.postalCode, shippingAddress.countryCode.displayValue, etc.
                */
        case "shippingAddress":
          newDataObject[placeholder] = this.getValues(
            field,
            Order.shipments[0],
            0
          );
          break;

        /*  General order attributes
                    The available element should starts with 'order' and it should contain real attributes
                    in this way we get needed values from order object.
                    Examples: order.orderNo, order.creationDate, etc.
                */
        case "order":
          newDataObject[placeholder] = this.getValues(field, Order, 1);
          break;

        /*  Tracking number
                    Separate case for 'trackingNumber' element only.
                */
        case "trackingNumber":
          newDataObject[placeholder] = Order.shipments[0].trackingNumber;
          break;

        /*  Delivery method
                    Separate case for 'deliveryMethod.display' element only.
                    It reads shipping method name and description from order.shipments[0].shippingMethod object
                */
        case "deliveryMethod":
          newDataObject[placeholder] =
            Order.shipments[0].shippingMethod.displayName +
            " - " +
            Order.shipments[0].shippingMethod.description;
          break;

        /*  Payment method
                    Separate case for 'paymentMethod.display' element only.
                    It reads 1st payment method from order object
                */
        case "paymentMethod":
          newDataObject[placeholder] =
            Order.paymentInstruments[0].paymentMethod;
          break;

        /*  Order rebate
                    Separate case for 'orderRebate' element only.
                */
        case "orderRebate":
          newDataObject[placeholder] =
            this.returnOrderRebate(Order).toFormattedString();
          break;

        /*  Shipping costs
                    Separate case for 'shippingCosts.display' element only,
                    it reads shipping total price from order.shipments[0] object
                */
        case "shippingCosts":
          newDataObject[placeholder] =
            Order.shipments[0].shippingTotalPrice.toFormattedString();
          break;

        /* Tracking number, shipment company, date of arrival, tracking link,
                    should have the following element definition:
                    custom.shipmentTrackingNumber
                    custom.shippingCompany
                    custom.arrivalDate
                    custom.trackingLink
                    The available element should starts with 'custom',
                    it reads custom attributes values from order.shipments[0] object
                */
        case "custom":
          newDataObject[placeholder] = this.getValues(
            field,
            Order.shipments[0].custom,
            1
          );
          break;

        case "constant":
          newDataObject[placeholder] = splitField[1];
          break;
        default:
          break;
      }
    }
  },

  /**
   * @description Returns object attribute
   * @param {Object} obj obj
   * @param {Object} attributes - array of attributes
   * @returns {Money|string} Value
   */
  getObjectAttr: function (obj, attributes) {
    // if we have no attributes, then return empty string
    if (!attributes.length) {
      return "";
    }

    // set attribute as first attribute from object
    var lineItemAttr = null;
    try {
      lineItemAttr = obj[attributes[0]];
    } catch (e) {
      lineItemAttr = null;
    }

    // remove first element from attrArr
    attributes.shift();

    // while attribute exists in it's parent object
    if (lineItemAttr) {
      attributes.forEach(function (key) {
        // check if object is not empty
        if (lineItemAttr) {
          // try to retrieve object's key
          try {
            lineItemAttr = lineItemAttr[key];
          } catch (e) {
            lineItemAttr = null;
          }
        }
      });
    }
    if (lineItemAttr instanceof Money) {
      lineItemAttr = lineItemAttr.getValueOrNull() || "0";
    }
    return lineItemAttr || "";
  },

  /**
   * @description Returns product rebate
   * @param {Object} product - Current product
   * @returns {dw.value.Money} Product rebate
   */
  returnProductRebate: function (product) {
    var currencyCode = Site.current.defaultCurrency;
    var rebate = new Money(0, currencyCode);
    if (!empty(product)) {
      var quantity = product.quantityValue;
      var adjustedPrice = product.adjustedPrice.divide(quantity);
      var basePrice = product.basePrice;
      currencyCode = product.price.currencyCode;
      rebate = new Money(0, currencyCode);
      if (basePrice.subtract(adjustedPrice).value > 0) {
        rebate = basePrice.subtract(adjustedPrice);
        rebate = rebate.multiply(quantity);
      }
    }
    return rebate;
  },

  /**
   * @description Returns order rebate
   * @param {Object} Order - Current order
   * @returns {dw.value.Money} Product rebate
   */
  returnOrderRebate: function (Order) {
    var currencyCode = Site.current.defaultCurrency;
    var rebate = new Money(0, currencyCode);
    if (!empty(Order)) {
      var shippingMethod = Order.shipments[0].getShippingMethod();
      var shippingModel = ShippingMgr.getShipmentShippingModel(
        Order.shipments[0]
      );
      var shippingCost = shippingModel.getShippingCost(shippingMethod).amount;

      currencyCode = Order.currencyCode;
      rebate = new Money(0, currencyCode);

      // order level rebate
      if (Order.priceAdjustments.length > 0) {
        for (var i = 0; i < Order.priceAdjustments.length; i += 1) {
          var basePrice = Order.priceAdjustments[i].basePrice;
          rebate = rebate.add(basePrice.multiply(-1));
        }
      }

      // product level rebate
      var productLineItems = Order.shipments[0].productLineItems;
      for (var j = 0; j < productLineItems.length; j += 1) {
        rebate = rebate.add(this.returnProductRebate(productLineItems[j]));
      }

      // shipping level rebate
      if (
        Order.shipments[0].shippingTotalTax.value === 0 &&
        shippingCost.value !== Order.shipments[0].shippingTotalTax.value
      ) {
        rebate = rebate.add(shippingCost);
      }
    }
    return rebate;
  },

  /**
   * @description Add SourceId to request
   * @param {Object} object - Input object
   * @return {void}
   */
  addSourceIdToRequest: function (object) {
    var newObject = object;
    var source = currentSite.getCustomPreferenceValue("emarsysSourceID");

    if (source) {
      newObject.source_id = source;
    }
  },

  /**
   * @description Format date
   * @param {string} date - Current date
   * @param {string} dateDelimeter - Date delimeter
   * @param {string} timeDelimeter - Time delimeter
   * @return {string} Format date
   */
  formatDate: function (date, dateDelimeter, timeDelimeter) {
    var newDateDelimeter = dateDelimeter || false;
    var newTimeDelimeter = timeDelimeter || "";

    var day = (date.getDate() > 9 ? "" : "0") + date.getDate();
    var month = (date.getMonth() + 1 > 9 ? "" : "0") + (date.getMonth() + 1);
    var year = (date.getFullYear() > 9 ? "" : "0") + date.getFullYear();
    var hours = (date.getHours() > 9 ? "" : "0") + date.getHours();
    var minutes = (date.getMinutes() > 9 ? "" : "0") + date.getMinutes();
    var seconds = (date.getSeconds() > 9 ? "" : "0") + date.getSeconds();

    var firstHalf = [year, month, day].join(newDateDelimeter);
    var secondHalf = [hours, minutes, seconds].join(newTimeDelimeter);

    var dateGlue = "";
    if (newDateDelimeter && dateDelimeter) {
      dateGlue = " ";
    }

    return [firstHalf, secondHalf].join(dateGlue);
  },

  /**
   * @description Get Emarsys profile fields descriptions
   * @return {Object} - Emarsys fields descriptions
   */
  prepareFieldsDescriptions: function () {
    var fieldValueMapping = {};
    var profileFieldsList = [];
    try {
      var ProfileFieldsCO = CustomObjectMgr.getCustomObject(
        "EmarsysProfileFields",
        "profileFields"
      );
      profileFieldsList = JSON.parse(ProfileFieldsCO.custom.result);
    } catch (err) {
      throw new Error(
        "[Emarsys emarsysHelper.js getEmarsysProfileFields()] - ***Get Emarsys profile fields error message:" +
          err.message +
          "\n" +
          err.stack
      );
    }

    try {
      fieldValueMapping = JSON.parse(
        currentSite.getCustomPreferenceValue("emarsysSingleChoiceValueMapping")
      );
    } catch (err) {
      throw new Error(
        "[Emarsys emarsysHelper.js getSingleChoiceValueMapping()] - ***Get single choice value mapping error message:" +
          err.message +
          "\n" +
          err.stack
      );
    }

    var profileFields = {};
    profileFieldsList.forEach(
      function (fieldObj) {
        var field = {
          id: "" + fieldObj.id,
          name: fieldObj.name,
          string_id: fieldObj.string_id,
          application_type: fieldObj.application_type,
        };

        field.isSingleChoice =
          Object.keys(this.fieldValueMapping).indexOf(field.id) !== -1;
        // get options data (if any exist)
        if (field.isSingleChoice) {
          field.options = {};
          this.fieldValueMapping[field.id].forEach(function (valueObj) {
            this.options[valueObj.choice] = valueObj.value;
          }, field);
        }

        // write data to profile fields collection if the record is valid
        if (!empty(fieldObj.string_id) && !empty(fieldObj.id)) {
          this.profileFields[fieldObj.string_id] = field;
        }
      },
      {
        profileFields: profileFields,
        fieldValueMapping: fieldValueMapping,
      }
    );
    return profileFields;
  },

  /**
   * Reads specified fields of EmarsysExternalEvents custom object
   * @param {string} customObjectKey - EmarsysExternalEvents custom object key
   * @param {Array} fieldsKeys - keys of fields to read
   * @return {Object} - custom object data
   */
  readEventsCustomObject: function (customObjectKey, fieldsKeys) {
    var custom = {};

    // get object which contain external events description (on BM side)
    custom.object = CustomObjectMgr.getCustomObject(
      "EmarsysExternalEvents",
      customObjectKey
    );
    if (custom.object === null) {
      throw new Error(
        'Custom object EmarsysExternalEvents with id "' +
          customObjectKey +
          '" does not exist'
      );
    }

    custom.fields = {};
    fieldsKeys.forEach(function (fieldKey) {
      var isValid = true;
      var result = null;

      switch (fieldKey) {
        case "newsletterSubscriptionSource":
        case "otherSource":
          result = parseList(this.object.custom[fieldKey]);
          isValid = !empty(result) && result.length !== 0;
          break;
        case "newsletterSubscriptionResult":
        case "otherResult":
          result = parseList(this.object.custom[fieldKey]);
          isValid = !empty(result);
          break;
        case "campaignsCategory":
          result = this.object.custom[fieldKey];
          isValid = !empty(result);
          break;
        default:
          result = this.object.custom[fieldKey];
      }

      if (!isValid) {
        throw new Error(
          'Invalid field "' +
            fieldKey +
            '" in custom object EmarsysExternalEvents'
        );
      }
      this.fields[fieldKey] = result;
    }, custom);

    return custom;
  },

  /**
   * Prepare collection from the list of items by simple value
   * @param {Array} list - list to prepare collection from
   * @param {Function} getKeyValue - custom function to get key property (required for list of objects)
   * @return {Object} - resultant collection
   */
  getValuesCollection: function (list, getKeyValue) {
    var context = {
      collection: {},
      getKeyValue: getKeyValue,
    };

    if (!empty(list)) {
      if (empty(getKeyValue) && typeof list[0] !== "object") {
        list.forEach(function (item) {
          if (item && !this.collection[item]) {
            this.collection[item] = item;
          }
        }, context);
      } else if (!empty(getKeyValue) && typeof list[0] === "object") {
        list.forEach(function (item) {
          var keyValue = item && this.getKeyValue(item);
          if (keyValue && !this.collection[keyValue]) {
            this.collection[keyValue] = item;
          }
        }, context);
      }
    }

    return context.collection;
  },

  populateOrderData: function (order) {
    // eslint-disable-line no-shadow
    var collections = require("*/cartridge/scripts/util/collections");
    var discount = 0;

    collections.forEach(order.priceAdjustments, function (priceAdjustment) {
      discount += Math.abs(priceAdjustment.price.value);
    });
    var uid = orderHelper.getLincDigest(order);

    return {
      Order: {
        Status: "SENT_FOR_FULFILLMENT",
        ShippingAmount: order.getAdjustedShippingTotalNetPrice().value,
        CreditCardExpiry:
          order.paymentInstrument.creditCardExpirationMonth +
          "/" +
          order.paymentInstrument.creditCardExpirationYear,
        LastFourCreditCardDigits: order.paymentInstrument.creditCardNumber,
        OrderNumber: order.orderNo,
        GiftCardNumber: "",
        SubTotal: order.adjustedMerchandizeTotalNetPrice.value,
        OrderDate: this.formatDate(order.creationDate, "-", ":"),
        GiftCardAppliedAmount: order.giftCertificateTotalPrice.value,
        BillingAddress: getAddress(order.billingAddress, order.customerEmail)
          .address,
        StatusUrl: "",
        GiftBoxPrice: 0,
        PromoCodesAppliedAmount: 0,
        Total: order.totalGrossPrice.value,
        Currency: order.getCurrencyCode(),
        PaymentMethod: order.paymentInstrument.creditCardType,
        SaleDiscountAmount: discount,
        PersonalizationPrice: 0,
        SalesTaxAmount: order.totalTax.value,
      },
      uid: uid,
      Language: order.customerLocaleID
        ? String(order.customerLocaleID).split("_")[0]
        : "en",
      FirstName: order.billingAddress.firstName,
      Title: "",
      Country: order.billingAddress.countryCode.displayValue,
      ORDER_BILLING_ADDRESS_EMAIL: order.customerEmail,
      LastName: order.billingAddress.lastName,
    };
  },

  splitLineItemAsConsignments: function (order) {
    // eslint-disable-line no-shadow
    var HashMap = require("dw/util/HashMap");
    var shipment;
    var productLineItems;
    var consignments = new HashMap();
    for (var i = 0; i < order.shipments.length; i += 1) {
      shipment = order.shipments[i];
      productLineItems = shipment.productLineItems;

      for (var s = 0; s < productLineItems.length; s += 1) {
        var productLineItem = productLineItems[s];
        var consignmentID = productLineItem.custom.consignmentID;
        var shippingAddress = getAddress(
          shipment.shippingAddress,
          order.customerEmail
        );
        var isInStorePickup = shipment.custom.shipmentType === "instore";

        var currencyCode = order.getCurrencyCode();

        if (!consignments.containsKey(consignmentID)) {
          var consignment = {
            Status: "processing",
            LinkToTrackingNumber: "",
            ShippingPrice: shipment.adjustedShippingTotalGrossPrice.valueOrNull,
            InStorePickUpFlag: isInStorePickup,
            Currency: order.getCurrencyCode(),
            Total: shipment.adjustedMerchandizeTotalGrossPrice.value,
            DeliveryAddress: isInStorePickup
              ? shippingAddress.emptyAddress
              : shippingAddress.address,
            DeliveryMode: shipment.shippingMethod.displayName,
            Tax: shipment.shippingTotalTax.getValueOrNull() || 0,
            Items: [getProductItem(productLineItem, currencyCode)],
            InStorePickupAddress: isInStorePickup
              ? shippingAddress.address
              : shippingAddress.emptyAddress,
          };
          consignments.put(consignmentID, consignment);
        } else {
          consignments
            .get(consignmentID)
            .Items.push(getProductItem(productLineItem, currencyCode));
        }
      }
    }

    return consignments;
  },

  populateShippingConfirmData: function (args) {
    var OrderHelpers = require("*/cartridge/scripts/order/orderHelpers");
    var order = args.Order; // eslint-disable-line no-shadow
    var shipment = args.items[0].shipment;
    var items = args.items;
    var currencyCode = order.getCurrencyCode();
    var shippingAddress = getAddress(
      shipment.shippingAddress,
      order.customerEmail
    );
    var isInStorePickup = shipment.custom.shipmentType === "instore";
    var donationTotal = OrderHelpers.getDonationTotal(order);
    var orderProducts = filterOrderProducts(
      order.allProductLineItems.toArray()
    );
    var uid = orderHelper.getLincDigest(order);
    return {
      uid: uid,
      Language: order.customerLocaleID
        ? String(order.customerLocaleID).split("_")[0]
        : "en",
      FirstName: order.billingAddress.firstName,
      Title: "",
      Country: order.billingAddress.countryCode.displayValue,
      donationAmountTotal: donationTotal,
      Consignment: {
        Status: "shipped",
        LinkToTrackingNumber: "",
        ShippingPrice: shipment.adjustedShippingTotalGrossPrice.valueOrNull,
        InStorePickUpFlag: isInStorePickup,
        Currency: order.getCurrencyCode(),
        Total: shipment.adjustedMerchandizeTotalGrossPrice.value,
        DeliveryAddress: isInStorePickup
          ? shippingAddress.emptyAddress
          : shippingAddress.address,
        DeliveryMode: shipment.shippingMethod.displayName,
        Tax: shipment.shippingTotalTax.getValueOrNull() || 0,
        Items: addShippingSpecificAttributes(),
        InStorePickupAddress: isInStorePickup
          ? shippingAddress.address
          : shippingAddress.emptyAddress,
        consignmentPromoAmount: getProductLevelTotalDiscount(items),
        orderSubTotal: order.totalGrossPrice.value,
      },
      OrderNumber: order.orderNo,
      LastName: order.billingAddress.lastName,
      ORDER_BILLING_ADDRESS_EMAIL: order.customerEmail,
      Billing_Info: {
        Name:
          order && order.billingAddress && order.billingAddress.fullName
            ? order.billingAddress.fullName
            : "",
        AddressLine1:
          order && order.billingAddress && order.billingAddress.address1
            ? order.billingAddress.address1
            : "",
        AddressLine2:
          order && order.billingAddress && order.billingAddress.address2
            ? order.billingAddress.address2
            : "",
        City:
          order && order.billingAddress && order.billingAddress.city
            ? order.billingAddress.city
            : "",
        State:
          order && order.billingAddress && order.billingAddress.stateCode
            ? order.billingAddress.stateCode
            : "",
        ZipCode:
          order && order.billingAddress && order.billingAddress.postalCode
            ? order.billingAddress.postalCode
            : "",
        Country:
          order && order.billingAddress && order.billingAddress.countryCode
            ? order.billingAddress.countryCode.value
            : "",
      },
      paymentMethod:
        order && order.paymentInstruments
          ? getPaymentMethods(order.paymentInstruments)
          : "",
      trackingNumber: "",
    };
  },

  exportCustomerInfo: function (profile) {
    var eventsHelper = require("*/cartridge/scripts/helpers/triggerEventHelper");
    var address;
    var customerArray = {};
    var customerContactList = [];
    var countryValueCodes = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysCountryCodes")
    );
    var genderValueCodes = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysGenderCodes")
    );
    var fieldValueMapping = JSON.parse(
      currentSite.getCustomPreferenceValue("emarsysSingleChoiceValueMapping")
    );
    var fieldConfigurationCO = CustomObjectMgr.getCustomObject(
      "EmarsysDBLoadConfig",
      "dbloadConfig"
    );
    var fieldConfiguration = JSON.parse(
      fieldConfigurationCO.custom.mappedFields
    );
    if (profile.addressBook.preferredAddress !== null) {
      address = profile.addressBook.preferredAddress;
    } else if (profile.addressBook.addresses.length > 0) {
      address = profile.addressBook.addresses[0];
    } else {
      address = {};
    }

    var customerData = function (indexField) {
      var Field = fieldConfiguration[indexField];
      var key = Field.field;
      customerArray[key] = getAttributeValue(
        address,
        profile,
        Field,
        countryValueCodes,
        genderValueCodes,
        fieldValueMapping,
        this.getValues
      );
    };

    customerContactList.push(customerArray);
    Object.keys(fieldConfiguration).forEach(customerData, this);
    var request = {
      keyId: "3",
      contacts: customerContactList,
    };

    eventsHelper.createAccountIfNotExist(customer.profile.email, request); // eslint-disable-line no-undef
  },

  processReturnshippingData: function (args) {
    var currentOrder = args.Order;
    var currencyCode = currentOrder.getCurrencyCode();
    var shipmentpayload = {};
    var DeliveryAddress = {};
    var allItems = filterOrderProducts(
      currentOrder.allProductLineItems.toArray()
    );
    var shipment = getreturnProductShipment(
      currentOrder.allProductLineItems,
      args.entryCode
    ).shipment;
    var items = getProductItems(allItems, currencyCode, true, false);

    return shipmentpayload;
  },

  populateLineItemDeliveryConfirmData: function (args) {
    var OrderHelpers = require("*/cartridge/scripts/order/orderHelpers");
    var order = args.Order; // eslint-disable-line no-shadow
    var shipment = args.items[0].shipment;
    var items = args.items;
    var currencyCode = order.getCurrencyCode();
    var shippingAddress = getAddress(
      shipment.shippingAddress,
      order.customerEmail
    );
    var isInStorePickup = shipment.custom.shipmentType === "instore";
    var donationTotal = OrderHelpers.getDonationTotal(order);
    var orderProducts = filterOrderProducts(
      order.allProductLineItems.toArray()
    );
    var uid = orderHelper.getLincDigest(order);
  },
};

const order = {
  "order-no": "TU004184321",
  "order-date": ["2024-11-09T21:34:56.000Z"],
  "created-by": ["storefront"],
  "original-order-no": ["TU009994321"],
  currency: ["USD"],
  "customer-locale": ["en_US"],
  taxation: ["net"],
  "invoice-no": ["00409576"],
  customer: [
    {
      "customer-name": "[Array]",
      "customer-email": "[Array]",
      "billing-address": "[Array]",
    },
  ],
  status: [
    {
      "order-status": "[Array]",
      "shipping-status": "[Array]",
      "confirmation-status": "[Array]",
      "payment-status": "[Array]",
    },
  ],
  "current-order-no": ["TU004184321"],
  "product-lineitems": [{ "product-lineitem": "[Array]" }],
  "shipping-lineitems": [{ "shipping-lineitem": "[Array]" }],
  shipments: [{ shipment: "[Array]" }],
  totals: [
    {
      "merchandize-total": "[Array]",
      "adjusted-merchandize-total": "[Array]",
      "shipping-total": "[Array]",
      "adjusted-shipping-total": "[Array]",
      "order-total": "[Array]",
    },
  ],
  payments: [{ payment: "[Array]" }],
  remoteHost: ["99.20.90.6"],
  "custom-attributes": [{ "custom-attribute": "[Array]" }],
  totalGrossPrice: "2135.50",
};

order.billingAddress = {
  firstName: "Jane",
  lastName: "Smith",
  fullName: "Jane Smith",
  emailAddress: "jsmith@gmail.com",
  gender: "F",
  address1: "123 Any St",
  address2: "STE 100",
  city: "Anytown",
  stateCode: "NJ",
  postalCode: "08022",
  countryCode: "US",
  phone: "973-433-4333",
  jobTitle: "Director",
  companyName: "Amazon",
  salutation: "Ms.",
  keyId: "3",
  3: "email", // '3'
  source_id: "62",
  5: "F",
};

// eslint-disable-next-line require-jsdoc
const orderStatusChangeNotification = (orderCustomAttr) => {
  try {
    order.customerEmail = "jsmith@gmai.com";
    order.gender = "F";
    order.orderNo = "TU009994249";
    order.customerLocaleID = "en";
    const email = "jsmith@gmai.com";

    const lincData = {
      st: "US", // STORE_KEY, an identifier used when you have multiple store types or locations. STORE KEY || US || Canada
      shop_id: "lincShopId",
      v: "3", // Do not change
      uid: "9929-293982",
      source: "order",
      m: "widgetType",
      locale: order.customerLocaleID, // en_US en_CA
      utm_campaign: "",
      utm_source: "order",
      utm_medium: "email", // Do not change
    };
    // object to store emarsys fields codes and billingAddress attributes

    // order change data to send
    const requestData = {
      key_id: "3",
      external_id: email,
      data: {
        Order_Id: order.orderNo,
        Language: order.customerLocaleID,
        FirstName: order.billingAddress.firstName,
        LastName: order.billingAddress.lastName,
        Country: order.billingAddress.countryCode,
        ORDER_BILLING_ADDRESS_EMAIL: order.billingAddress.emailAddress,
      },
    };
    const DeliveryAddress = {
      StreetAddress1: "123 Any St",
      StreetAddress2: "STE 100",
      City: "Anytown",
      StateProvince: "NJ",
      PostalCode: "08820",
    };
    const shipmentpayload = {
      DeliveryAddress: DeliveryAddress,
      DeliveryMode: "Overnight",
      ShippingTimeline: "Delivery by 9AM",
      Items: "[Array]",
    };

    if (orderCustomAttr && orderCustomAttr.indexOf("CancelledOrder") > -1) {
      requestData.data.Order_Id = order.orderNo;
      requestData.data.CancelReason = "Tumi customer declined";
      requestData.data.Language = order.customerLocaleID;
      requestData.data.donationAmountTotal = "50";
    } else if (orderCustomAttr && orderCustomAttr === "orderReturn") {
      requestData.data = {
        CreditedFlag: true,
        Language: order.customerLocaleID,
        CreditedToNumber: "4111111111111111",
        CreditedTo: "Jane Smith",
        FirstName: order.billingAddress.firstName,
        Country: order.billingAddress.countryCode,
        CreditAmount: "2123.00",
        OrderNumber: order.orderNo,
        ORDER_BILLING_ADDRESS_EMAIL: order.customerEmail,
        LastName: order.billingAddress.lastName,
        donationAmountTotal: "50.00",
        Consignments: shipmentpayload,
      };
    } else {
      requestData.data = {
        uid: "SomeUserID",
        Language: "en",
        FirstName: order.billingAddress.firstName,
        Title: "",
        Country: order.billingAddress.countryCode,
        donationAmountTotal: "50.00",
        Consignment: {
          Status: "delivered",
          LinkToTrackingNumber: "",
          ShippingPrice: "1234.56",
          InStorePickUpFlag: false,
          Currency: "USD",
          Total: "2135.50",
          DeliveryAddress: DeliveryAddress,
          DeliveryMode: "UPS",
          Tax: "120.00",
          Items: addShippingSpecificAttributes(),
          InStorePickupAddress: DeliveryAddress,
          consignmentPromoAmount: "10.00",
          orderSubTotal: order.totalGrossPrice,
        },
        OrderNumber: order.orderNo,
        LastName: order.billingAddress.lastName,
        ORDER_BILLING_ADDRESS_EMAIL: order.customerEmail,
        Billing_Info: {
          Name: order.billingAddress.fullName,
          AddressLine1: order.billingAddress.address1,
          AddressLine2: order.billingAddress.address2,
          City: order.billingAddress.city,
          State: order.billingAddress.stateCode,
          ZipCode: order.billingAddress.postalCode,
          Country: order.billingAddress.countryCode,
        },
        paymentMethod: "PayPal",
        trackingNumber: "1Z828328378AAV",
      };
      requestData.data.lincWidgetDetails = lincData;
    }

    console.log(requestData);
  } catch (err) {
    statusObj = { status: false, msg: err.message };
    console.error(
      "[Emarsys email.js] - ***Submit data error message: " +
        err.message +
        "\n" +
        err.stack
    );
  }
};

let base = {};
/**
 * @description order confirmation
 * @param {Object} args args
 * @returns {void}
 */
base.orderConfirmation = function (args) {
  var sendData = {};
  var isSubscribe = false;

  try {
    sendData.key_id = "3"; // search by e-mail
    sendData.external_id = "joeshmoe@gmail.com";
    sendData.data = {}; // object for storing mapped fields

    /*
     * System field IDs reference
     * http://documentation.emarsys.com/resource/b2c-cloud/contacts/fields/system-fields/
     */
    var contactData = {
      firstName: "Jane",
      lastName: "Smith",
      emailAddress: "jsmith@gmail.com",
      address1: "123 Any St.",
      city: "Anytown",
      stateCode: "NJ",
      postalCode: "08820",
      countryCode: "US",
      phone: "973-111-2222",
      companyName: "Tumi, Inc.",
    };
    contactData.key_id = 3; // search by e-mail
    contactData.source_id = "99292922";
    contactData["3"] = "joeshmoe@gmail.com";
    if (isSubscribe) {
      contactData["31"] = 1;
    }

    // define an object to store data retrieved from order.billingAddress object
    var map = {};

    // add data to request body
    emarsysHelper.addFields(map, contactData);

    // We couldn't create/update the contact, log the event

    // populate placeholders with values
    var mappedFields = {};
    // sendData.data.global = {};
    // emarsysHelper.appendGlobalMappedFieldsObject(mappedFields, sendData.data.global, order);

    // Add products
    // sendData.data.products = [];
    // emarsysHelper.appendProductInfo(mappedFields, order, sendData.data.products);

    // populate the order details.
    sendData.data = {};
    emarsysHelper.appendGlobalMappedFieldsObject(
      mappedFields,
      sendData.data,
      order
    );
    sendData.data.orderTrackingUrl =
      "https://tumi.letslinc.com/tracking?shop_id=614d3a9e-e5a0-11eb-8940-4ec5dd03e061&v=3&uid=2b14aa4288c6aa234b209094f3321590bb321a24de2e7fc323c0e0e4fcc34229&m=tracking&utm_medium=order_locator&utm_source=default";
    sendData.data.donationAmountTotal = "50";
    console.log(sendData);
    orderStatusChangeNotification("");
  } catch (err) {
    console.error(
      "[hook/emails.js] - ***Emarsys order confirmation email error message: " +
        err.message +
        "\n" +
        err.stack
    );
  }
};

base.orderCancellation = function (args) {
  var orderCustomAttr = "emarsysCancelledOrderEmailSent";
  orderStatusChangeNotification(orderCustomAttr);
};

base.shippingConfirm = function (args) {
  var orderCustomAttr = "emarsysShippingEmailSent";
  orderStatusChangeNotification(orderCustomAttr);
};

base.orderReturn = function (args) {
  orderStatusChangeNotification("orderReturn");
};
base.deliveryConfirm = function (args) {
  orderStatusChangeNotification(orderCustomAttr);
};

base.orderConfirmation();

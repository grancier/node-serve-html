Items: addShippingSpecificAttributes(getProductItems(orderProducts, currencyCode, true, true, true), items, order.allProductLineItems.toArray()),

/**
 * Parse string representation of array
 * @param {string} items - ProductLineItems
 * @param {string} currencyCode - currenycCode
 * @param {string} emarsysShippingEmailSent - flag for identyfying emarsysShippingemail
 * @param {string} addUUIdandConsignmentId - flag for identyfying addUUIdandconsignmentId
 * @return {Array} - parsed array (null for parse error)
 */
function getProductItems(items, currencyCode, emarsysShippingEmailSent, addUUIdandConsignmentId) {
    var result = [];
    if (emarsysShippingEmailSent) {
        items.forEach(function (productLineItem) {
            result.push(getProductItemShippingEmailPayload(productLineItem, currencyCode, addUUIdandConsignmentId));
        });
    } else {
        items.forEach(function (productLineItem) {
            result.push(getProductItem(productLineItem, currencyCode));
        });
    }
    return result;
}

/**
 * Parse string representation of array
 * @param {string} productLineItem - productlineItem of order level
 * @param {string} currencyCode - currencyCode
 * @param {string} addUUIdandConsignmentId - currencyCode
 * @return {Array} - parsed array (null for parse error)
 */
function getProductItemShippingEmailPayload(productLineItem, currencyCode, addUUIdandConsignmentId) {
    var collections = require('*/cartridge/scripts/util/collections');
    var locale = Site.getCurrent().defaultLocale;
    var ImageModel = require('*/cartridge/models/product/productImages');
    var product = productLineItem.product;
    var image = new ImageModel(product, { types: ['small'], quantity: 'all' });
    var discount = 0;

    var vasMonogramAttributes = productLineItem.custom.monogramDataOnPLI ? JSON.parse(productLineItem.custom.monogramDataOnPLI) : false;
    var vasEntries = vasMonogramAttributes;
    var vasEntry = false;

    var monoPatch = vasEntries && vasEntries[0].productCode === 'MONOPATCH' ? vasEntries[0] : vasEntries[1];
    var monoTag = vasEntries && vasEntries[0].productCode === 'MONOTAG' ? vasEntries[0] : vasEntries[1];
    var isPremiumMonogram = productLineItem.custom.isPremiumMonogram;
    var monoPatchLetters = monoPatch && monoPatch.character ? monoPatch.character.split(' ') : false;
    var monoTagLetters = monoTag && monoTag.character ? monoTag.character.split(' ') : false;
    var embrioderyData = productLineItem.custom && productLineItem.custom.embroideryDataOnPLI ? JSON.parse(productLineItem.custom.embroideryDataOnPLI) : null;
    var sizeToCutData = getSizeToCutOption(productLineItem);
    var embrioderyLetters = null;
    if (embrioderyData && embrioderyData.embroidery && embrioderyData.embroidery.embroideryText) {
        if (embrioderyData.embroidery.embroideryText.includes(')')) {
            embrioderyLetters = embrioderyData.embroidery.embroideryText.split(' ');
        } else {
            embrioderyLetters = embrioderyData.embroidery.embroideryText.replace(/\s/g, '').split('');
        }
    }
    collections.forEach(productLineItem.priceAdjustments, function (priceAdjustment) {
        discount += Math.abs(priceAdjustment.price.value);
    });
    if (vasEntries) {
        vasEntry = vasEntries.filter(function (entries) {
            return Object.hasOwnProperty.call(entries, 'vasField1');
        });
    }
    var pricebook = locale === 'en_US' ? 'usd-list-prices' : 'cad-list-prices';
    var listprice = productLineItem.product ? productLineItem.product.getPriceModel().getPriceBookPrice(pricebook).getValue() : null;
    var MonogramLetters = null;
    if (vasEntry && vasEntry[0] && vasEntry[0].vasField1) {
        if (vasEntry[0].vasField1.includes(')')) {
            MonogramLetters = vasEntry[0].vasField1.split(' ');
        } else {
            MonogramLetters = vasEntry[0].vasField1.replace(/\s/g, '').split('');
        }
    }
    var isDelivered = (productLineItem.custom.lincShipStatus && productLineItem.custom.lincShipStatus.value === 'DELIVERED');
    var result = {
        delivered: isDelivered,
        StockFlag: 'In Stock',
        ProductName: productLineItem.productName,
        ProductImage: image.small[0].url,
        ItemGiftBoxPrice: 0,
        ProductPrice: productLineItem.getAdjustedNetPrice().value,
        Unit: productLineItem.product.unit,
        ItemNumber: productLineItem.productID,
        Currency: currencyCode,
        trackingnumber: '',
        ItemSaleDiscountAmount: discount,
        ProductColor: product.custom.color,
        ItemSubtotal: productLineItem.adjustedPrice.value,
        trackingurl: '',
        Quantity: productLineItem.quantityValue,
        GiftMessage: productLineItem.giftMessage,
        ColorAccentsColor: '',
        ProductSize: '',
        GiftBoxFlag: productLineItem.isGift,
        backorderdate: '',
        MonogramLetters: monoPatchLetters[0] ? monoPatchLetters[0] : '',
        MonogramLetters2: monoPatchLetters[1] ? monoPatchLetters[1] : '',
        MonogramLetters3: monoPatchLetters[2] ? monoPatchLetters[2] : '',
        MonogramFontColor: monoPatch && monoPatch.color ? monoPatch.color : '',
        MonogramFontStyle: monoPatch && monoPatch.font ? monoPatch.font : '',
        MonogramTagLetters: monoTagLetters[0] ? monoTagLetters[0] : '',
        MonogramTagLetters2: monoTagLetters[1] ? monoTagLetters[1] : '',
        MonogramTagLetters3: monoTagLetters[2] ? monoTagLetters[2] : '',
        MonogramTagFontColor: monoTag && monoTag.color ? monoTag.color : '',
        MonogramTagFontStyle: monoTag && monoTag.font ? monoTag.font : '',
        classicMonogram1: !isPremiumMonogram && MonogramLetters && MonogramLetters[0] ? MonogramLetters[0] : '',
        classicMonogram2: !isPremiumMonogram && MonogramLetters && MonogramLetters[1] ? MonogramLetters[1] : '',
        classicMonogram3: !isPremiumMonogram && MonogramLetters && MonogramLetters[2] ? MonogramLetters[2] : '',
        classicMonogramPrice: !isPremiumMonogram ? 0 : '',
        MetalMonogram1: isPremiumMonogram && MonogramLetters && MonogramLetters[0] ? MonogramLetters[0] : '',
        MetalMonogram2: isPremiumMonogram && MonogramLetters && MonogramLetters[1] ? MonogramLetters[1] : '',
        MetalMonogram3: isPremiumMonogram && MonogramLetters && MonogramLetters[2] ? MonogramLetters[2] : '',
        MetalMonogramPrice: isPremiumMonogram && vasEntries ? getMetalLettersPrice(vasEntries) : '',
        Embroidery1: embrioderyLetters && embrioderyLetters[0] ? embrioderyLetters[0] : '',
        Embroidery2: embrioderyLetters && embrioderyLetters[1] ? embrioderyLetters[1] : '',
        Embroidery3: embrioderyLetters && embrioderyLetters[2] ? embrioderyLetters[2] : '',
        EmbroideryPrice: embrioderyLetters ? getEmbrioderPrice(productLineItem.optionProductLineItems) : '',
        OriginalPrice: listprice || '',
        Promomessage: productLineItem.priceAdjustments ? getPromoMessages(productLineItem.priceAdjustments) : '',
        CollectionName: product && product.custom ? product.custom.grandCollection : '',
        sizeToCut: sizeToCutData && sizeToCutData.sizeToCutPresnt ? sizeToCutData.sizeId : ''
    };
    if (addUUIdandConsignmentId) {
        result.UUID = productLineItem.getUUID();
        result.consignmentID = productLineItem.custom && productLineItem.custom.consignmentID ? productLineItem.custom.consignmentID : null;
    }
    return result;
}

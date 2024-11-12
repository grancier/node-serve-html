import trigger from "./trig_emails.json" assert { type: "json" };

const result = trigger.data.filter((item)=>item.status_code === 'active')

console.log(JSON.stringify(result))

Hi @Abhishek Mishra 

Order Confirmation Elements

Shipping Information Elements

Cancelled Order Information Elements

triggerEmarsysShippingConfirmationEmail

ccountsubmitRegistration

Account-PasswordResetDialogForm",
            "Tracer-ComplteRegistration",




    "sendEmarsysOrderConfirmEmail": true,
    "sendAccountsubmitRegistrationEmail": true,
    "enableMiniCartRecommendation": true,
    "scaledImageEnabledPDP": false,
    "scaledImageEnabledTile": false,
    "pdpUGCImageConfig": {
        "enablePixleeImagesOnPDPImageGallery": true,
        "PDPUGCImageSKUs": []
    },
    "emarsysRegistration": {
        "enableEmarsysContactRegistration": true,
        "PiplineToCover": [
            "Account-PasswordResetDialogForm",
            "Tracer-ComplteRegistration",
"Account-SavePassword"
        ]
    }
}
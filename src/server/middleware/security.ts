import helmet from "helmet";

export default function security() {
    return helmet({
        "contentSecurityPolicy": {
            "directives": {
                "defaultSrc": ["'self'"],
                "styleSrc": ["'self'", "'unsafe-inline'"],
                "scriptSrc": ["'self'", "'unsafe-inline'"],
                "objectSrc": ["'none'"],
                "frameSrc": ["'none'"],
                "baseUri": ["'none'"],
                "formAction": ["'self'"],
                "fontSrc": ["'self'"],
                "connectSrc": ["'self'"],
                "imgSrc": ["'self'"],
                "frameAncestors": ["'none'"],
                "blockAllMixedContent": [],
                "upgradeInsecureRequests": []
            }
        }
    })
}
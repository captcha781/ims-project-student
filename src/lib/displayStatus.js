export const kycStatus = (status) => {
    switch (status) {
        case "new": return "NOT_VERIFIED";
        case "pending": return "PENDING";
        case "approved": return "APPROVED";
        case "rejected": return "REJECTED";
        default: return "NOT_VERIFIED"
    }
}

export const idProofName = (type, status) => {
    let typeValue = type;
    if (status == 1) {
        typeValue = ''
    }
    switch (typeValue) {
        case 1: return "Passport";
        case 2: return "Driving Licence";
        case 3: return "National Security Card";
        default: return ""
    }
}

export const addressProofName = (type, status) => {
    let typeValue = type;
    if (status == 1) {
        typeValue = ''
    }
    switch (typeValue) {
        case 1: return "Bank Passbook";
        case 2: return "National Card";
        case 3: return "Passport";
        default: return ""
    }
}

export const bankProofName = (type, status) => {
    let typeValue = type;
    if (status == 1) {
        typeValue = ''
    }
    switch (typeValue) {
        case 1: return "Bank Passbook";
        case 2: return "Bank statement";
        default: return ""
    }
}

export const twoFAStatus = (type, callFrom) => {
    if (type == 'enabled' && callFrom == 'status') {
        return "ENABLED"
    } else if (type == 'disabled' && callFrom == 'status') {
        return "DISABLED"
    } else if (type == 'enabled' && callFrom == 'button') {
        return "DISABLED"
    } else if (type == 'disabled' && callFrom == 'button') {
        return "ENABLE"
    } else {
        return ""
    }
}

export const documentStatus = (status) => {
    switch (status) {
        case 'pending': return "NOT_VERIFIED";
        case 'approved': return "VERIFIED";
        case 'rejected': return "REJECTED";
        default: return ""
    }
}

export const documentType = (status) => {
    switch (status) {
        case 'license': return "DRIVING_LICENSE";
        case 'pan': return "PANCARD";
        case 'aadhar': return "AADHAR_CARD";
        case 'gas': return "GAS_BILL";
        default: return ""
    }
}

export const userStatus = (status) => {
    switch (status) {
        case 'verified': return "VERIFIED";
        case 'unverified': return "NOT_VERIFIED";
        case 'not_activate': return "NOT_VERIFIED";
        case 'basic': return "BASIC";
        case 'advanced': return "ADVANCED";
        case 'pro': return "PRO";
        case 'basic_pending': return "BASIC_PENDING";
        case 'basic_submitted': return "BASIC_SUBMITTED";
        case 'basic_verified': return "BASIC_VERIFIED";
        case 'advanced_processing': return "ADVANCED_Pending";
        case 'pro_processing': return "PRO_PENDING";
        default: return status
    }
}

export const transactionStatus = (status) => {
    switch (status) {
        case 'fiat_deposit': return "Deposit";
        case 'fiat_withdraw': return "Withdraw";
        case 'coin_deposit': return "Deposit";
        case 'coin_withdraw': return "Withdraw";
        case 'coin_transfer': return "Internal";
        case 'fiat_transfer': return "Internal";
        default: return ""
    }
}

export const triggerCondition = (status) => {
    switch (status) {
        case 'equal': return "=";
        case 'greater_than': return "<=";
        case 'lesser_than': return ">=";
        default: return "-"
    }
}

export const bankCodeName = (currency) => {
    switch (currency) {
        case 'USD': return "IBAN_CODE";
        case 'EUR': return "BIC_SWIFT_CODE";
        case 'INR': return "IFSC_CODE";
        default: return "BNAK_CODE"
    }
}
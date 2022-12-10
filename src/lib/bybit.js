
/** 
 * Calculate order cost
*/
export const inverseOrderCost = ({ price, quantity, leverage, takerFee, buyorsell }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        leverage = parseFloat(leverage)
        takerFee = parseFloat(takerFee)

        return (
            inverseInitialMargin({ price, quantity, leverage, takerFee })
            +
            inverseFeeToOpen({ price, quantity, takerFee })
            +
            inverseFeeToClose({ price, quantity, leverage, takerFee, buyorsell })
        )
    } catch (err) {
        return 0
    }
}

export const inverseInitialMargin = ({ price, quantity, leverage }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        leverage = parseFloat(leverage)

        return quantity / (price * leverage)
    } catch (err) {
        return 0
    }
}
export const orderValue = ({ price, quantity }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)

        return quantity / price
    } catch (err) {
        return 0
    }
}
export const inverseFeeToOpen = ({ price, quantity, takerFee }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        takerFee = parseFloat(takerFee)

        return (quantity / price) * (takerFee / 100)
    } catch (err) {
        return 0
    }
}

export const inverseFeeToClose = ({ price, quantity, leverage, takerFee, buyorsell }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        takerFee = parseFloat(takerFee)

        return (quantity / inverseBankrupty({ price, leverage, buyorsell })) * (takerFee / 100)
    } catch (err) {
        return 0
    }
}

export const inverseBankrupty = ({ price, leverage, buyorsell }) => {
    try {
        price = parseFloat(price)
        leverage = parseFloat(leverage)

        if (buyorsell == 'buy') {
            return price * (leverage / (leverage + 1))
        } else if (buyorsell == 'sell') {
            return price * (leverage / (leverage - 1))
        }
        return 0
    } catch (err) {
        return 0
    }
}

export const unrealizedProfitLoss = ({ price, quantity, lastPrice, buyorsell }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        lastPrice = parseFloat(lastPrice)
        if (buyorsell == 'buy') {
            return quantity * (lastPrice - price)
        } else if (buyorsell == 'sell') {
            return quantity * (price - lastPrice)
        }
    } catch (err) {
        return 0
    }
}

export const unrealizedPnLPercentage = ({ price, quantity, lastPrice, leverage, takerFee, buyorsell }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        lastPrice = parseFloat(lastPrice)
        leverage = parseFloat(leverage)
        takerFee = parseFloat(takerFee)

        return (unrealizedProfitLoss({ price, quantity, lastPrice, buyorsell }) / inversePositionMargin({ price, quantity, leverage, takerFee, buyorsell })) * 100
    } catch (err) {
        return 0
    }
}

export const inversePositionMargin = ({ price, quantity, leverage, takerFee, buyorsell }) => {
    try {
        price = parseFloat(price)
        quantity = parseFloat(quantity)
        leverage = parseFloat(leverage)
        takerFee = parseFloat(takerFee)

        return (
            inverseInitialMargin({ price, quantity, leverage })
            +
            inverseFeeToClose({ price, quantity, leverage, takerFee, buyorsell })
        )
    } catch (err) {
        return 0
    }
}

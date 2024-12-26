
function decode() {
    const data = [
        '70B24288-83C4-4035-B001-573285B21AE2',
        'get',
        'subscriptions',
        '849108LHHoyn',
        '2024-01-01T01:01:01Z',
        'entitlements',
        '9692-01-01T01:01:01Z',
        '9692',
        'stringify',
        'subscriber',
        '6888322aKhQnY',
        '590IPLWil',
        'log',
        '523575QzObdK',
        'parse',
        '891984cvQdcK',
        '116FWbNdc',
        '3493930XYbicF',
        'https://api.revenuecat.com/v1/product_entitlement_mapping',
        '54069XsSVzg',
        'headers',
        '6WdyCOt',
        'product_identifier',
        '2149312nSWieu'
    ];

    decode = function() {
        return data;
    };

    return decode();
}

const mapIndex = (index, offset) => decode()[index - offset];

(function (data, target) {
    const getMapped = mapIndex;
    const decodedData = data();
    while (true) {
        try {
            const result = -parseInt(getMapped(216, 208)) / 1 +
                -parseInt(getMapped(212, 208)) / 2 +
                -parseInt(getMapped(208, 208)) / 3 * (parseInt(getMapped(229, 208)) / 4) +
                -parseInt(getMapped(230, 208)) / 5 * (-parseInt(getMapped(210, 208)) / 6) +
                -parseInt(getMapped(223, 208)) / 7 +
                -parseInt(getMapped(228, 208)) / 8 +
                -parseInt(getMapped(226, 208)) / 9 * (-parseInt(getMapped(224, 208)) / 10);

            if (result === target) break;
            else decodedData.push(decodedData.shift());
        } catch (error) {
            decodedData.push(decodedData.shift());
        }
    }
})(decode, 589520);

const request = $request;
const options = {
    url: mapIndex(231, 208),
    headers: request[mapIndex(209, 208)]
};

$httpClient[mapIndex(214, 208)](options, function (error, response, body) {
    const log = mapIndex(225, 208);
    const parsedBody = JSON[mapIndex(227, 208)](body);

    console[log](body);

    let responseData = {
        request_date_ms: 0x18cc289d0c8,
        request_date: mapIndex(217, 208),
        subscriber: {
            entitlement: {},
            first_seen: mapIndex(217, 208),
            original_application_version: mapIndex(220, 208),
            last_seen: mapIndex(217, 208),
            other_purchases: {},
            management_url: null,
            subscriptions: {},
            entitlements: {},
            original_purchase_date: mapIndex(217, 208),
            original_app_user_id: mapIndex(213, 208),
            non_subscriptions: {}
        }
    };

    const productMapping = parsedBody['product_entitlement_mapping'];

    for (const [productId, productData] of Object.entries(productMapping)) {
        const productIdentifier = productData[mapIndex(211, 208)];
        const entitlements = productData[mapIndex(218, 208)];

        for (const entitlementId of entitlements) {
            responseData[mapIndex(222, 208)][mapIndex(218, 208)][entitlementId] = {
                purchase_date: mapIndex(217, 208),
                original_purchase_date: '2024-01-01T01:01:01Z',
                expires_date: mapIndex(219, 208),
                product_identifier: productIdentifier
            };

            responseData[mapIndex(222, 208)][mapIndex(215, 208)][productIdentifier] = {
                expires_date: '9692-01-01T01:01:01Z',
                original_purchase_date: mapIndex(217, 208),
                purchase_date: mapIndex(217, 208)
            };
        }
    }

    const responseBody = JSON[mapIndex(216, 208)](responseData);
    console[log](responseData);

    $done({ body: responseBody });
});

var objc = JSON.parse($response.body);

objc.user_access.type = "premium";
objc.user_access.marketplace = "itunes";
objc.user_access.valid_until = "2099-03-18T18:35:19.000+00:00";
objc.user_access.valid_from = "2024-03-11T18:38:13.465+00:00";
objc.user_access.will_renew = true;
objc.user_access.payment_state = null;
objc.user_access.trial = "softpaywall";


$done({ body: JSON.stringify(objc) });

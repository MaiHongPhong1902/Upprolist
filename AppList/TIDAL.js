var objc = JSON.parse($response.body);

objc = {
    "startDate": "2024-10-20T02:39:09.042+0000",
    "validUntil": "2099-10-20T02:39:05.000+0000",
    "status": "ACTIVE",
    "subscription": {
      "type": "PREMIUM_PLUS",
      "offlineGracePeriod": 30
    },
    "highestSoundQuality": "HI_RES",
    "premiumAccess": true,
    "canGetTrial": false,
    "paymentType": "APPLE_WALLET",
    "paymentOverdue": false
  }

$done({ body: JSON.stringify(objc) });

var objc = JSON.parse($response.body);

objc = {
    "active_subscriptions": [
      {
        "id": "04c682fe-47b2-4b91-b215-ed09cc3ab22b",
        "public_id": "subs_gcXIjDiT4DBlxaFo7CfHWgUOc049R",
        "content_id": null,
        "environment": "PRODUCTION",
        "is_family_shared": false,
        "offer_identifier": null,
        "offer_type": "FREE_TRIAL",
        "plan_id": "a9124deb-c786-40f1-8d52-272edb4c0bc1",
        "purchase_token": null,
        "purchased_at": "2025-02-06T08:09:54Z",
        "store_country": "VN",
        "store_type": "APPLE_APP_STORE",
        "cancelled_at": null,
        "next_renewal_at": "2029-03-19T21:32:26Z",
        "original_purchased_at": "2025-02-06T08:09:54Z",
        "subscription_status": "ACTIVATED"
      }
    ],
     "expired_subscriptions": [],
    "non_consumables": []
  }
$done({ body: JSON.stringify(objc) });

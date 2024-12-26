var body = JSON.parse($request.body);

body.workflowResult = {
    "id" : "purchase_subscription_workflow",
    "instanceId" : "purchase_subscription_workflow",
    "response" : "purchase_completed=true&workflow_type=NEW_PURCHASE&transaction_identifier=948BBE62-8741-402B-A760-1F56D4A77BB8&product_id=com.adobe.lrmobile.ios.40gb.1999usd.1y.v2&source=IOS_APP_STORE",
    "type" : "APP_STORE_WORKFLOW",
    "version" : "1"
  };

$done({ body: JSON.stringify(body) });

#
# On a linux platform, populate these values and run "source config_env.sh"
#
# ====== Set TWILIO Environment Parameters ======
export TWILIO_ACCOUNT_SID=<TWILIO ACCOUNT ID>
export TWILIO_AUTH_TOKEN=<TWILIO ACCOUNT TOKEN>
export TWILIO_PHONE_NUMBER=<TWILIO PHONE NUMBER YOU BUY FOR SMS>

# ====== Set Stripe Environment Parameters ======
export STRIPE_PUBLISHABLE_KEY=<STRIPE PUBLISHABLE KEY STARTING IN:pk_test_ or pk_live_>
export STRIPE_SECRET_KEY=<STRIPE SECRET KEY STARTING IN: sk_test or sk_live_>

# ====== Set Stormpath Environment Parameters ======
export STORMPATH_API_KEY_ID=<STORMPATH API KEY ID FROM ACCOUNT OWNER>
export STORMPATH_API_KEY_SECRET=<STORMPATH API SECRET KEY FROM ACCOUNT OWNER>

export STORMPATH_CLIENT_APIKEY_ID=<STORMPATH API KEY ID FROM ACCOUNT OWNER>
export STORMPATH_CLIENT_APIKEY_SECRET=<STORMPATH API SECRET KEY FROM ACCOUNT OWNER>

export STORMPATH_APPLICATION_HREF=<STORMPATH APPLICATION HREF FROM APP PAGE>

# ====== Set Server Environment Parameters ======
export PORT=<ARBITRARY OPEN PORT, LIKE 3000>

# ====== Set Application Environment Parameters ======
export COST_PER_QUERY=2

# Netlify Deployment Guide

## Required Environment Variables

When deploying to Netlify, you MUST set these environment variables in your Netlify dashboard:

### 1. Navigate to Netlify Dashboard
- Go to: **Site settings → Environment variables**

### 2. Add These Variables:

#### Telegram Configuration (REQUIRED for notifications)
```
TELEGRAM_BOT_TOKEN=8992354125:AAH_A4hKwzAsaE97uKCrlRp1_UzO11KOcWI
TELEGRAM_CHAT_ID=-1004482554358
TELEGRAM_GROUP_CHAT_ID=-1004482554358
```

#### Supabase Configuration
```
SUPABASE_PROJECT_ID=vyojuxtoigpvvjepdimo
SUPABASE_URL=https://vyojuxtoigpvvjepdimo.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug
SUPABASE_ANON_KEY=sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug
VITE_SUPABASE_PROJECT_ID=vyojuxtoigpvvjepdimo
VITE_SUPABASE_URL=https://vyojuxtoigpvvjepdimo.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug
VITE_SUPABASE_ANON_KEY=sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug
```

#### Admin Configuration
```
ADMIN_PASSWORD=Bethebest1rr
```

#### Application Settings
```
PORT=8080
API_BASE=/.netlify/functions
```

## Deployment Steps

1. **Push code to GitHub** (already done)
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select repository: `kaitoboyj/remix-of-hello-world-canvas`

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add all variables listed above
   - Click "Save"

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

6. **Test Notifications**
   - Visit your deployed site
   - Check Telegram for visit notification
   - Fill out form and check for interaction notifications

## Testing Locally

To test Telegram notifications locally:

1. Visit: http://localhost:8080/test-notification.html
2. Click "Send Test Notification"
3. Check your Telegram for the message

## Verification

After deployment, verify:
- ✅ Site loads correctly
- ✅ Telegram receives visit notifications
- ✅ Form submissions send complete data to Telegram
- ✅ File uploads are sent as Telegram attachments
- ✅ No Supabase toast popups appear

## Troubleshooting

If notifications don't work:

1. **Check Environment Variables**
   - Ensure all variables are set in Netlify dashboard
   - Re-deploy after adding variables

2. **Check Build Logs**
   - Look for "Telegram notifications configured" message
   - Check for any error messages

3. **Test the Bot**
   - Message your bot directly on Telegram
   - Ensure it's in the correct group/channel

4. **Check Function Logs**
   - Go to Netlify → Functions → telegram-proxy
   - Check for error logs

## Important Notes

- ⚠️ The `.env` file is NOT deployed to Netlify (it's in .gitignore)
- ⚠️ You MUST set environment variables in Netlify dashboard
- ⚠️ After changing environment variables, re-deploy the site
- ✅ Telegram notifications work automatically once env vars are set
- ✅ All notifications are silent to users (no popups)

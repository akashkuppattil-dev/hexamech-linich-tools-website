# Mobile Access Guide

## How to Access Your Website from Mobile Device

### Step 1: Make Sure Your PC and Mobile are on the Same Wi-Fi Network

Both your computer and mobile device must be connected to the same Wi-Fi network.

### Step 2: Find Your Computer's IP Address

Run this command in PowerShell to find your IP:
```powershell
ipconfig | findstr /i "IPv4"
```

Or check the server output - it will show:
```
- Network: http://YOUR_IP:3001
```

### Step 3: Start the Server for Mobile Access

Run this command:
```bash
npm run dev:mobile
```

Or use the regular dev command (it now binds to all network interfaces):
```bash
npm run dev
```

### Step 4: Access from Your Mobile Device

1. Open your mobile browser (Chrome, Safari, etc.)
2. Type in the address bar:
   ```
   http://YOUR_IP_ADDRESS:3001
   ```
   
   For example:
   ```
   http://192.168.1.100:3001
   ```
   or
   ```
   http://172.20.10.4:3001
   ```

### Quick Access Script

The server is already configured to be accessible on your network. Just:

1. **Find your IP address** (shown in server output or run `ipconfig`)
2. **Make sure server is running**: `npm run dev` or `npm run dev:mobile`
3. **On your mobile**, open browser and go to: `http://YOUR_IP:3001`

### Troubleshooting

**Can't connect?**
- Make sure both devices are on the same Wi-Fi
- Check Windows Firewall - it might be blocking the connection
- Try disabling firewall temporarily to test
- Make sure the server shows "Network: http://YOUR_IP:3001" in the output

**Firewall Fix:**
1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Add Node.js or allow port 3001

**Port Already in Use?**
- The server will automatically use the next available port (3002, 3003, etc.)
- Check the server output for the actual port number

### Current Server Status

- **Port**: 3001 (or check server output)
- **Network Access**: Enabled (binds to 0.0.0.0)
- **Local Access**: http://localhost:3001
- **Mobile Access**: http://YOUR_IP:3001





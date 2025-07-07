        // Check if the page has been reloaded before in the current session
        if (!sessionStorage.getItem('pageReloaded')) {
            // Set the flag in sessionStorage to indicate that the page has been reloaded
            sessionStorage.setItem('pageReloaded', 'true');
            
            // Reload the page
            window.location.reload();
        }
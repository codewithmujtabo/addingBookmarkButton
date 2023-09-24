const bookmarkButton = document.getElementById('bookmarkButton');

        bookmarkButton.addEventListener('click', () => {
            if (typeof window.sidebar !== 'undefined' && window.sidebar.addPanel) {
                // For Firefox
                window.sidebar.addPanel(document.title, window.location.href, '');
            } else if (window.external && ('AddFavorite' in window.external)) {
                // For Internet Explorer
                window.external.AddFavorite(window.location.href, document.title);
            } else if (window.opera && window.print) {
                // For Opera
                const bookmarkLink = document.createElement('a');
                bookmarkLink.setAttribute('href', window.location.href);
                bookmarkLink.setAttribute('title', document.title);
                bookmarkLink.setAttribute('rel', 'sidebar');
                bookmarkLink.click();
            } else {
                // For other browsers, provide a message to the user.
                alert('Please use your browser\'s bookmarking feature to bookmark this page.');
            }
        });
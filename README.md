# add-proxy-to-instagram-images-in-bazqux-userscript

Use BazQux's proxy for preventing from cdninstagram.com's `same-origin` issue.

## Installation

* https://greasyfork.org/en/scripts/425553-add-bazqux-s-proxy-for-instagram-images
* https://openuserjs.org/scripts/gslin/Add_BazQuxs_proxy_for_Instagram_images

## Why?

I use the following rule to block Instagram embed code in BazQux so that it will be much faster while loading:

    ||platform.instagram.com^$script,domain=bazqux.com

However, if images are responsed with "Cross-Origin-Resource-Policy: same-origin", then I cannot load these images on BazQux, so that's why I wrote this script to proxy all `*.cdninstagram.com` images.

## License

See [LICENSE](LICENSE).

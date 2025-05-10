// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    "battery": {
        "low": 20,
        "critical": 10,
        "warnLevels": [
            20,
            15,
            5
        ],
    },
    "music": {
        "preferredPlayer": "plasma-browser-integration"
    },
    "onScreenKeyboard": {
        "layout": "qwerty_full" // See modules/onscreenkeyboard/onscreenkeyboard.js for available layouts
    },
    "overview": {
        "scale": 0.18, // Relative to screen size
        "numOfRows": 2,
        "numOfCols": 5,
        "wsNumScale": 0.09,
        "wsNumMarginScale": 0.07
    },
    "sidebar": {
        "image": {
            "columns": 2,
            "batchCount": 20,
            "allowNsfw": false
        },
        "pages": {
            "order": [
                "apis",
                "tools"
            ],
            "defaultPage": "apis",
            "apis": {
                "order": [
                    "gemini",
                    "gpt",
                    "waifu",
                    "booru"
                ],
                "defaultPage": "gemini"
            }
        },
        "quickToggles": {
            "order": [
                "wifi",
                "bluetooth",
                "nightlight",
                "gamemode",
                "idleinhibitor",
                "cloudflarewarp"
            ]
        },
        "calendar": {
            "expandByDefault": true
        }
    },
    "search": {
        "enableFeatures": {
            "actions": true,
            "commands": true,
            "mathResults": true,
            "directorySearch": true,
            "aiSearch": true,
            "webSearch": true
        },
        "engineBaseUrl": "https://www.google.com/search?q=",
        "excludedSites": [
            "quora.com"
        ]
    },
    "time": {
        // See https://docs.gtk.org/glib/method.DateTime.format.html
        // Here's the 12h format: "%I:%M%P"
        // For seconds, add "%S" and set interval to 1000
        "format": "%I:%M:%S %P",
        "interval": 1000,
        "dateFormatLong": "%A, %d/%m", // On bar
        "dateInterval": 5000,
        "dateFormat": "%d/%m", // On notif time
        "calendarDateFormat": "%d %B %Y"
    },
    "weather": {
        "city": "",
        "preferredUnit": "C" // Either C or F
    },
    "workspaces": {
        "shown": 10
    },
    "dock": {
        "enabled": false,
        "hiddenThickness": 5,
        "pinnedApps": [
            "firefox",
            "org.gnome.Nautilus"
        ],
        "layer": "top",
        "monitorExclusivity": true, // Dock will move to other monitor along with focus if enabled
        "searchPinnedAppIcons": false, // Try to search for the correct icon if the app class isn't an icon name
        "trigger": [
            "client-added",
            "client-removed"
        ], // client_added, client_move, workspace_active, client_active
        // Automatically hide dock after `interval` ms since trigger
        "autoHide": [
            {
                "trigger": "client-added",
                "interval": 500
            },
            {
                "trigger": "client-removed",
                "interval": 500
            }
        ]
    },
    // Longer stuff
    "icons": {
        // Find the window's icon by its class with levenshteinDistance
        // The file names are processed at startup, so if there
        // are too many files in the search path it'll affect performance
        // Example: ["/usr/share/icons/Tela-nord/scalable/apps"]
        "searchPaths": [
            ""
        ],
        "symbolicIconTheme": {
            "dark": "Adwaita",
            "light": "Adwaita"
        },
        "substitutions": {
            "code-url-handler": "visual-studio-code",
            "Code": "visual-studio-code",
            "GitHub Desktop": "github-desktop",
            "Minecraft* 1.20.1": "minecraft",
            "gnome-tweaks": "org.gnome.tweaks",
            "pavucontrol-qt": "pavucontrol",
            "wps": "wps-office2019-kprometheus",
            "wpsoffice": "wps-office2019-kprometheus",
            "footclient": "foot",
            "": "image-missing"
        },
        "regexSubstitutions": [
            {
                "regex": "/^steam_app_(\\d+)$/",
                "replace": "steam_icon_$1"
            }
        ]
    },
}
export default userConfigOptions;

module.exports = {
    info: {
        name: "ZeresPluginLibrary",
        authors: [{
            name: "Zerebos",
            discord_id: "249746236008169473",
            github_username: "rauenzi",
            twitter_username: "ZackRauen"
        }],
        version: "1.2.21",
        description: "Gives other plugins utility functions and the ability to emulate v2.",
        github: "https://github.com/rauenzi/BDPluginLibrary",
        github_raw: "https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js"
    },
    changelog: [
        {
            title: "Bugs Squashed",
            type: "fixed",
            items: [
                "EmulatedTooltips look good again and have more options. Thanks to DorCoMaNdO on GitHub!",
                "EmulatedTooltips positioning and unclosable Click To Update tooltips fixed by Lighty",
                "Modals like the alert and confirmation modals should work again.",
                "Context menus and patches using DCM should work again."
            ]
        },
        {
            title: "Small Changes",
            type: "improved",
            items: [
                "Discord's ColorPicker will be used for color settings if it is loaded.",
                "Patches should hopefully be maintained in case the library gets reloaded unexpectedly.",
                "Update check should show a tooltip instructing users to click in order to update."
            ]
        }
    ],
    main: "plugin.js"
};
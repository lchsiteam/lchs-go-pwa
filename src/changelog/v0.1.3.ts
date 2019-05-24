export default {
  title: "v0.1.3", 
  entries: [
    {
      id: 5, 
      isPublic: true, 
      title: '7/8 Schedules and New Settings', 
      author: 'Bryan Wang', 
      tagline: 'Not just for high schoolers anymore! ', 
      content: [
        { type: 'text', text: 'Schedules for 7th and 8th graders are now available! Change your grade in the settings. '}, 
        { type: 'text', text: 'The "Remaining Time" section on the "Now" screen can now be toggled between showing the amount of time until your period ends, and showing the amount of time until your next period. Use the button in the top right corner of that section to toggle. '}, 
      ], 
    }, 
    {
      id: 4, 
      isPublic: true,
      title: "Special Day Schedules and Background Animations",
      author: "Ryan King",
      tagline: "Fading animation option for background!",
      content: [
        { type: "text", text: "Special days that do not follow the normal schedule such as Assembly days are now shown. In addition, you can make the background theme slowly change color with the click of a switch." },
      ]
    },
    {
      id: 3, 
      isPublic: false,
      title: "CRITICAL: Web Apps Won't Update On iOS",
      author: "Kevin Mo",
      tagline: "Issue: LCHS Go does not update versions of LCHS Go that have been added as home screen apps.",
      content: [
        { type: "text", text: "Issue: LCHS Go does not update when installed as a home screen app." },
        { type: "text", text: "Affected Devices: iOS (iPhone, iPad, etc.). Android devices are unaffected by this bug." },
        { type: "text", text: "Workaround A (recommended): Visit the go.lciteam.club website on the Safari application for the time being." },
        { type: "text", text: "Workaround B: Remove the old home screen app and add it to the home screen again by going to go.lciteam.club on Safari. This must be done for every update until a patch is released." },
        { type: "text", text: "Status: The development team is currently working on a hotfix to patch this issue on affected devices. Please stay tuned for an announcement." },
      ]
    },
    {
      id: 2, 
      isPublic: true,
      title: "Chrome extension finally out!",
      author: "Kai Bredemann",
      tagline: "Easy access to the daily schedule without the hassle",
      content: [
        { type: "text", text: "Tired of going to go.lciteam.club? This extension will let you open LCHS Go in a small popout and see the time remaining of the current period at a quick glance. Download it here:" },
        { type: "call-to-action", text: "Get the Extension!", url: "https://chrome.google.com/webstore/detail/lchs-go/cmmaleejnmjplfcnhojldkiejpndakad" },
        { type: "image", url: require("../assets/lchsgo_screencap_meme.png") },
      ]
    },
    {
      id: 1, 
      isPublic: false,
      title: "Update: Introducing the Settings Page",
      author: "Kevin Mo",
      tagline: "The beginning of a new era for customization",
      content: [
        { type: "image", url: require("../assets/screencap_0.1.3.png") },
        { type: "text", text: "Hello! Mo here. Over the weekend, the development team rolled out an update to LCHS Go. Let's take a look!" },
        { type: "text", text: "v0.1.3 includes a brand new settings page that allows you to customize the user interface. You can now change the time display between 12-hour and 24-hour time, disable fancy animations, and show passing periods in the bell schedule." },
        { type: "text", text: "First off: \"Time Display\". Some users have complained about the use of military time in LCHS Go. In this new release, we've made 12-hour time the default setting for all users. Of course, you can always change it back by going to the Settings page and clicking \"24h\" under \"Time Display\"." },
        { type: "text", text: "Moving on: \"Enable Animations\" and \"Show Hidden Periods\". These display options now allow you to tweak the display of the live clock and the bell schedule, respectively. More graphical tweaks will roll out in future updates." },
        { type: "text", text: "We've also rolled out a sneak peak of \"Color Themes\", which allows you to switch up the app's color scheme. Keep in mind that this is still a feature in progress. Do you have a color theme in mind? Let us know what you think by sending us an email! (see below for address)" },
        { type: "text", text: "Of course, there are other changes in this version besides the new Settings page. You might have noticed changes to the credits page (two new contributors!). We've also patched a few bugs based on user feedback (ex: the live clock now sticks to the Los Angeles timezone)." },
        { type: "text", text: "This about wraps it up for v0.1.3. As always, if you experience any issues using LCHS Go or have a suggestion you want to submit, send a short email to team@lciteam.club and we'll be happy to respond." },
        { type: "text", text: "Thank you for using LCHS Go! Please look forward to the next update!" }
      ]
    },
  ]
}

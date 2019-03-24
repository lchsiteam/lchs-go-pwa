export class LCHSGoTheme {
  public id = "default"
  public name = "(none)"
  public description = "(none)"
  public gradientTopColor = "#42b983"
  public gradientBottomColor = "#2f9768"
  public btnMenuColor = "#2c3e50"
  public btnSubmenuColor = "#2f9768"
  public btnHoverColor = "rgba(#2f9768, .4)"

  constructor(
    id: string, name: string, description: string, 
    gradientTopColor: string, gradientBottomColor: string,
    btnMenuColor: string, btnSubmenuColor: string,
    btnHoverColor: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.gradientTopColor = gradientTopColor;
    this.gradientBottomColor = gradientBottomColor;
    this.btnMenuColor = btnMenuColor;
    this.btnSubmenuColor = btnSubmenuColor;
    this.btnHoverColor = btnHoverColor;
  }
}

export const Themes = [
  new LCHSGoTheme(
    "default", "Developer Green", "The original color theme.",
    "#42b983", "#2f9768", "#2c3e50", "#2f9768", "rgba(#2f9768, .4)",
  ),
  new LCHSGoTheme(
    "theme1", "Theme A", "(none)",
    "#f0f1a0", "#e376a38c", "#edcea4", "#e376a359", "rgba(151, 47, 147, 0.11)",
  ),
  new LCHSGoTheme(
    "theme2", "Theme B", "(none)",
    "#a8d7c9", "#2a5ebb", "#6786bd", "#314e82", "rgba(92, 125, 185, 0.4)",
  ),
  new LCHSGoTheme(
    "theme3", "Theme C", "(none)",
    "#ddeb2353", "#eb232370", "#f07f6d94", "#f07f6d94", "rgba(228, 153, 153, 0.4)",
  ),
  new LCHSGoTheme(
    "theme4", "Theme D", "(none)",
    "#f2f3aea3", "#16c2b47a", "#97b7b5c2", "#97b7b5a8", "rgba(176, 174, 197, 0.36)",
  ),
  new LCHSGoTheme(
    "theme5", "Theme E", "(none)",
    "#93ef91c4", "#ae38a92e", "#d01fac4a", "#748685a6", "rgba(176, 174, 197, 0.36)"
  ),
  new LCHSGoTheme(
    "theme6", "Theme F", "(none)",
    "#2512c291", "#3897ae63", "#a0becca8", "#a0becc66", "rgba(112, 139, 146, 0.47)"
  ),
  new LCHSGoTheme(
    "theme7", "Theme G", "(none)",
    "#b94296ba", "#bcc4e5", "#65087780", "#712a80a6", "rgba(111, 15, 96, 0.43)"
  ),
  new LCHSGoTheme(
    "theme8", "Theme H", "(none)",
    "#62f1de", "#4100ffa6", "#0d3ad275", "#6c64ffa6", "rgba(131, 111, 183, 0.43)"
  ),
  new LCHSGoTheme(
    "theme9", "Theme I", "(none)",
    "#ffffff00", "#4100ff", "#291fe2c7", "#291fe2a8", "rgba(71, 0, 255, 0.43)"
  ),
]
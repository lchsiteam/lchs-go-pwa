export class LCHSGoTheme {
  public id = 'default';
  public name = '(none)';
  public description = '(none)';
  public gradientColors = ['#42b983', '#2f9768'];
  public btnMenuColor = '#2c3e50';
  public btnSubmenuColor = '#2f9768';
  public btnHoverColor = 'rgba(#2f9768, .4)';

  constructor(
    id: string, name: string, description: string,
    gradientColors: string[],
    btnMenuColor: string, btnSubmenuColor: string,
    btnHoverColor: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.gradientColors = gradientColors;
    this.btnMenuColor = btnMenuColor;
    this.btnSubmenuColor = btnSubmenuColor;
    this.btnHoverColor = btnHoverColor;
  }
}

export const Themes = [
  new LCHSGoTheme(
    'theme8', 'Violet Delight', '(none)',
    ['#62f1de', '#4100ffa6'], '#0d3ad275', '#6c64ffa6', 'rgba(131, 111, 183, 0.43)',
  ),
  new LCHSGoTheme(
    'theme2', 'Marine Sky', 'A calming blue reminiscent of the beaches',
    ['#a8d7c9', '#2a5ebb'], '#6786bd', '#314e82', 'rgba(92, 125, 185, 0.4)',
  ),
  new LCHSGoTheme(
    'default', 'Developer Green', 'The original color theme.',
    ['#42b983', '#2f9768'], '#2c3e50', '#2f9768', 'rgba(47, 151, 104, .4)',
  ),
  new LCHSGoTheme(
    'theme10', 'Monochrome Life', 'Doesn\'t hurt your eyes.',
    ['#3A3A3A', '#2A2A2A'], '#555555', '#111111', '#222222',
  ),
  new LCHSGoTheme(
    'theme1', 'True Sunset', '(none)',
    ['#fa709a', '#fee140'], '#edcea4', '#e376a359', 'rgba(151, 47, 147, 0.11)',
  ),
  new LCHSGoTheme(
    'theme4', 'Aqua Sky', '(none)',
    ['#007adf', '#00ecbc'], '#0097bc', '#12abd1', 'rgba(152, 201, 223, 0.55)',
  ),
  new LCHSGoTheme(
    'theme5', 'New Life', '(none)',
    ['#43e97b', '#38f9d7'], '#d01fac4a', '#748685a6', 'rgba(176, 174, 197, 0.36)',
  ),
  new LCHSGoTheme(
    'theme6', 'Crystal River', '(none)',
    ['#22e1ff', '#1d8fe1'], '#625eb1', '#a0becc66', 'rgba(112, 139, 146, 0.47)',
  ),
  new LCHSGoTheme(
    'theme7', 'Northern Miracle', '(none)',
    ['#00dbde', '#fc00ff'], '#65087780', '#712a80a6', 'rgba(111, 15, 96, 0.43)',
  ),
  new LCHSGoTheme(
    'theme9', 'We kept this \'cus Devyn liked it...', '(none)',
    ['#ffffff00', '#4100ff'], '#291fe2c7', '#291fe2a8', 'rgba(71, 0, 255, 0.43)',
  ),
  new LCHSGoTheme(
    'theme11', 'Rainbow Theme', '(none)',
    ['#ff2400', '#e81d1d', '#e8b71d', '#e3e81d', '#1de840', '#1ddde8', '#2b1de8', '#dd00f3', '#dd00f3'], '#ffffff75', '#ffffff75', '#ffffff75',
  ),
  new LCHSGoTheme(
    'theme12', 'Dark Night', '(none)',
    ['#30cfd0', '#330867'], '#ffffff5e', '#ffffff5e', 'rgba(71, 0, 255, 0.43)',
  ),
  new LCHSGoTheme(
    'theme13', 'Sweet Blend', '(none)',
    ['#3f51b1', '#5a55ae', '#7b5fac', '#8f6aae', '#a86aa4', '#cc6b8e', '#f18271', '#f3a469', '#f7c978'], '#291fe2c7', '#291fe2a8', 'rgba(71, 0, 255, 0.43)',
  ),
  new LCHSGoTheme(
    'theme14', 'Morning Sun', '(none)',
    ['#f83600', '#f9d423'], '#f96d0c', '#f96d0c', 'rgba(249, 172, 26, 0.45)',
  ),
  new LCHSGoTheme(
    'theme15', 'Dynamic Theme', 'A theme that changes depending on the time of day!',
    ['#30cfd0', '#330867'], '#291fe2c7', '#291fe2a8', 'rgba(71, 0, 255, 0.43)',
  ),
  new LCHSGoTheme(
    'theme16', 'Pink', '(none)',
    ['#ff69b4', '#ff69b4'], '#ff69b4', '#ff69b4', 'rgba(255, 105, 180, 0.43)',
  ),
];

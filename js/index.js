class Page {
  _navItemElement = null;
  _contentElement = null;

  initialize() {
    this._navItemElement = document.getElementsByClassName("active")[0];
    this._contentElement = this._getContentElement(this._navItemElement.id);

    const navItemElements = document.getElementsByClassName("nav-item");

    for (const navItemElement of navItemElements) {
      navItemElement.addEventListener("click", (event) => {
        this._setActiveNavItem(event.target.id);
        this._setActiveContent(event.target.id);
      });
    }
  }

  _getContentElement(navItemId) {
    const contentElementId = navItemId.replace("navItem", "").toLowerCase();
    return document.getElementById(contentElementId);
  }

  _setActiveNavItem(navItemId) {
    const element = document.getElementById(navItemId);
    element.classList.add("active");

    this._navItemElement.classList.remove("active");
    this._navItemElement = element;
  }

  _setActiveContent(navItemId) {
    const element = this._getContentElement(navItemId);
    element.classList.remove("hidden");

    this._contentElement.classList.add("hidden");
    this._contentElement = element;
  }
}

const page = new Page();

page.initialize();

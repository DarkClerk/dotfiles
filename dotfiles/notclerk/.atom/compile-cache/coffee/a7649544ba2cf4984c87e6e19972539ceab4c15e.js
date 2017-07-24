(function() {
  var root, setFontSize, setHideDockButtons, setTabSizing, unsetFontSize, unsetHideDockButtons, unsetTabSizing;

  root = document.documentElement;

  module.exports = {
    activate: function(state) {
      atom.config.observe('pristine-ui.fontSize', function(value) {
        return setFontSize(value);
      });
      atom.config.observe('pristine-ui.tabSizing', function(value) {
        return setTabSizing(value);
      });
      atom.config.observe('pristine-ui.hideDockButtons', function(value) {
        return setHideDockButtons(value);
      });
      if (atom.config.get('pristine-ui.layoutMode')) {
        return atom.config.unset('pristine-ui.layoutMode');
      }
    },
    deactivate: function() {
      unsetFontSize();
      unsetTabSizing();
      return unsetHideDockButtons();
    }
  };

  setFontSize = function(currentFontSize) {
    if (Number.isInteger(currentFontSize)) {
      return root.style.fontSize = currentFontSize + "px";
    } else if (currentFontSize === 'Auto') {
      return unsetFontSize();
    }
  };

  unsetFontSize = function() {
    return root.style.fontSize = '';
  };

  setTabSizing = function(tabSizing) {
    return root.setAttribute('theme-pristine-ui-tabsizing', tabSizing.toLowerCase());
  };

  unsetTabSizing = function() {
    return root.removeAttribute('theme-pristine-ui-tabsizing');
  };

  setHideDockButtons = function(hideDockButtons) {
    if (hideDockButtons) {
      return root.setAttribute('theme-pristine-ui-dock-buttons', 'hidden');
    } else {
      return unsetHideDockButtons();
    }
  };

  unsetHideDockButtons = function() {
    return root.removeAttribute('theme-pristine-ui-dock-buttons');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvcHJpc3RpbmUtdWkvbGliL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDOztFQUVoQixNQUFNLENBQUMsT0FBUCxHQUNFO0lBQUEsUUFBQSxFQUFVLFNBQUMsS0FBRDtNQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQixzQkFBcEIsRUFBNEMsU0FBQyxLQUFEO2VBQzFDLFdBQUEsQ0FBWSxLQUFaO01BRDBDLENBQTVDO01BR0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQW9CLHVCQUFwQixFQUE2QyxTQUFDLEtBQUQ7ZUFDM0MsWUFBQSxDQUFhLEtBQWI7TUFEMkMsQ0FBN0M7TUFHQSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBb0IsNkJBQXBCLEVBQW1ELFNBQUMsS0FBRDtlQUNqRCxrQkFBQSxDQUFtQixLQUFuQjtNQURpRCxDQUFuRDtNQUtBLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHdCQUFoQixDQUFIO2VBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFaLENBQWtCLHdCQUFsQixFQURGOztJQVpRLENBQVY7SUFlQSxVQUFBLEVBQVksU0FBQTtNQUNWLGFBQUEsQ0FBQTtNQUNBLGNBQUEsQ0FBQTthQUNBLG9CQUFBLENBQUE7SUFIVSxDQWZaOzs7RUF1QkYsV0FBQSxHQUFjLFNBQUMsZUFBRDtJQUNaLElBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsZUFBakIsQ0FBSDthQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBWCxHQUF5QixlQUFELEdBQWlCLEtBRDNDO0tBQUEsTUFFSyxJQUFHLGVBQUEsS0FBbUIsTUFBdEI7YUFDSCxhQUFBLENBQUEsRUFERzs7RUFITzs7RUFNZCxhQUFBLEdBQWdCLFNBQUE7V0FDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVgsR0FBc0I7RUFEUjs7RUFNaEIsWUFBQSxHQUFlLFNBQUMsU0FBRDtXQUNiLElBQUksQ0FBQyxZQUFMLENBQWtCLDZCQUFsQixFQUFpRCxTQUFTLENBQUMsV0FBVixDQUFBLENBQWpEO0VBRGE7O0VBR2YsY0FBQSxHQUFpQixTQUFBO1dBQ2YsSUFBSSxDQUFDLGVBQUwsQ0FBcUIsNkJBQXJCO0VBRGU7O0VBTWpCLGtCQUFBLEdBQXFCLFNBQUMsZUFBRDtJQUNuQixJQUFHLGVBQUg7YUFDRSxJQUFJLENBQUMsWUFBTCxDQUFrQixnQ0FBbEIsRUFBb0QsUUFBcEQsRUFERjtLQUFBLE1BQUE7YUFHRSxvQkFBQSxDQUFBLEVBSEY7O0VBRG1COztFQU1yQixvQkFBQSxHQUF1QixTQUFBO1dBQ3JCLElBQUksQ0FBQyxlQUFMLENBQXFCLGdDQUFyQjtFQURxQjtBQXJEdkIiLCJzb3VyY2VzQ29udGVudCI6WyJyb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYWN0aXZhdGU6IChzdGF0ZSkgLT5cbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlICdwcmlzdGluZS11aS5mb250U2l6ZScsICh2YWx1ZSkgLT5cbiAgICAgIHNldEZvbnRTaXplKHZhbHVlKVxuXG4gICAgYXRvbS5jb25maWcub2JzZXJ2ZSAncHJpc3RpbmUtdWkudGFiU2l6aW5nJywgKHZhbHVlKSAtPlxuICAgICAgc2V0VGFiU2l6aW5nKHZhbHVlKVxuXG4gICAgYXRvbS5jb25maWcub2JzZXJ2ZSAncHJpc3RpbmUtdWkuaGlkZURvY2tCdXR0b25zJywgKHZhbHVlKSAtPlxuICAgICAgc2V0SGlkZURvY2tCdXR0b25zKHZhbHVlKVxuXG4gICAgIyBERVBSRUNBVEVEOiBUaGlzIGNhbiBiZSByZW1vdmVkIGF0IHNvbWUgcG9pbnQgKGFkZGVkIGluIEF0b20gMS4xNy8xLjE4aXNoKVxuICAgICMgSXQgcmVtb3ZlcyBgbGF5b3V0TW9kZWBcbiAgICBpZiBhdG9tLmNvbmZpZy5nZXQoJ3ByaXN0aW5lLXVpLmxheW91dE1vZGUnKVxuICAgICAgYXRvbS5jb25maWcudW5zZXQoJ3ByaXN0aW5lLXVpLmxheW91dE1vZGUnKVxuXG4gIGRlYWN0aXZhdGU6IC0+XG4gICAgdW5zZXRGb250U2l6ZSgpXG4gICAgdW5zZXRUYWJTaXppbmcoKVxuICAgIHVuc2V0SGlkZURvY2tCdXR0b25zKClcblxuXG4jIEZvbnQgU2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5zZXRGb250U2l6ZSA9IChjdXJyZW50Rm9udFNpemUpIC0+XG4gIGlmIE51bWJlci5pc0ludGVnZXIoY3VycmVudEZvbnRTaXplKVxuICAgIHJvb3Quc3R5bGUuZm9udFNpemUgPSBcIiN7Y3VycmVudEZvbnRTaXplfXB4XCJcbiAgZWxzZSBpZiBjdXJyZW50Rm9udFNpemUgaXMgJ0F1dG8nXG4gICAgdW5zZXRGb250U2l6ZSgpXG5cbnVuc2V0Rm9udFNpemUgPSAtPlxuICByb290LnN0eWxlLmZvbnRTaXplID0gJydcblxuXG4jIFRhYiBTaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuc2V0VGFiU2l6aW5nID0gKHRhYlNpemluZykgLT5cbiAgcm9vdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lLXByaXN0aW5lLXVpLXRhYnNpemluZycsIHRhYlNpemluZy50b0xvd2VyQ2FzZSgpKVxuXG51bnNldFRhYlNpemluZyA9IC0+XG4gIHJvb3QucmVtb3ZlQXR0cmlidXRlKCd0aGVtZS1wcmlzdGluZS11aS10YWJzaXppbmcnKVxuXG5cbiMgRG9jayBCdXR0b25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnNldEhpZGVEb2NrQnV0dG9ucyA9IChoaWRlRG9ja0J1dHRvbnMpIC0+XG4gIGlmIGhpZGVEb2NrQnV0dG9uc1xuICAgIHJvb3Quc2V0QXR0cmlidXRlKCd0aGVtZS1wcmlzdGluZS11aS1kb2NrLWJ1dHRvbnMnLCAnaGlkZGVuJylcbiAgZWxzZVxuICAgIHVuc2V0SGlkZURvY2tCdXR0b25zKClcblxudW5zZXRIaWRlRG9ja0J1dHRvbnMgPSAtPlxuICByb290LnJlbW92ZUF0dHJpYnV0ZSgndGhlbWUtcHJpc3RpbmUtdWktZG9jay1idXR0b25zJylcbiJdfQ==

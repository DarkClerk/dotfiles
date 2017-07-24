(function() {
  var CompositeDisposable, Gruvbox, fs, path;

  fs = require('fs');

  path = require('path');

  CompositeDisposable = require('atom').CompositeDisposable;

  Gruvbox = (function() {
    function Gruvbox() {}

    Gruvbox.prototype.config = require('./gruvbox-settings').config;

    Gruvbox.prototype.activate = function() {
      this.disposables = new CompositeDisposable;
      this.packageName = require('../package.json').name;
      this.disposables.add(atom.config.observe(this.packageName + ".brightness", (function(_this) {
        return function() {
          return _this.enableConfigTheme();
        };
      })(this)));
      this.disposables.add(atom.config.observe(this.packageName + ".contrast", (function(_this) {
        return function() {
          return _this.enableConfigTheme();
        };
      })(this)));
      return this.disposables.add(atom.config.observe(this.packageName + ".variant", (function(_this) {
        return function() {
          return _this.enableConfigTheme();
        };
      })(this)));
    };

    Gruvbox.prototype.deactivate = function() {
      return this.disposables.dispose();
    };

    Gruvbox.prototype.enableConfigTheme = function() {
      var brightness, contrast, variant;
      brightness = atom.config.get(this.packageName + ".brightness");
      contrast = atom.config.get(this.packageName + ".contrast");
      variant = atom.config.get(this.packageName + ".variant");
      return this.enableTheme(brightness, contrast, variant);
    };

    Gruvbox.prototype.enableTheme = function(brightness, contrast, variant) {
      var activePackage, activePackages, i, len;
      if (!this.isPreviewConfirmed) {
        if (this.isActiveTheme(brightness, contrast, variant)) {
          return;
        }
      }
      try {
        fs.writeFileSync(this.getSyntaxVariablesPath(), this.getSyntaxVariablesContent(brightness, contrast, variant));
        activePackages = atom.packages.getActivePackages();
        if (activePackages.length === 0 || this.isPreview) {
          atom.packages.getLoadedPackage("" + this.packageName).reloadStylesheets();
        } else {
          for (i = 0, len = activePackages.length; i < len; i++) {
            activePackage = activePackages[i];
            activePackage.reloadStylesheets();
          }
        }
        this.activeBrightness = brightness;
        this.activeContrast = contrast;
        return this.activeVariant = variant;
      } catch (error) {
        return this.enableDefaultTheme();
      }
    };

    Gruvbox.prototype.isActiveTheme = function(brightness, contrast, variant) {
      return brightness === this.activeBrightness && contrast === this.activeContrast && variant === this.activeVariant;
    };

    Gruvbox.prototype.getSyntaxVariablesPath = function() {
      return path.join(__dirname, "..", "styles", "syntax-variables.less");
    };

    Gruvbox.prototype.getSyntaxVariablesContent = function(brightness, contrast, variant) {
      return "@import 'schemes/" + (brightness.toLowerCase()) + "-" + (contrast.toLowerCase()) + "';\n@import 'schemes/" + (brightness.toLowerCase()) + "';\n@import 'colors';\n@import 'variants/" + (this.getNormalizedName(variant)) + "';";
    };

    Gruvbox.prototype.getNormalizedName = function(name) {
      return ("" + name).replace(/\ /g, '-').toLowerCase();
    };

    Gruvbox.prototype.enableDefaultTheme = function() {
      var brightness, contrast, variant;
      brightness = atom.config.get(this.packageName + ".brightness");
      contrast = atom.config.get(this.packageName + ".contrast");
      variant = atom.config.get(this.packageName + ".variant");
      return this.setThemeConfig(brightness, contrast, variant);
    };

    Gruvbox.prototype.setThemeConfig = function(brightness, contrast, variant) {
      atom.config.set(this.packageName + ".brightness", brightness);
      atom.config.set(this.packageName + ".contrast", contrast);
      return atom.config.set(this.packageName + ".variant", variant);
    };

    Gruvbox.prototype.isConfigTheme = function(brightness, contrast, variant) {
      var configBrightness, configContrast, configVariant;
      configBrightness = atom.config.get(this.packageName + ".brightness");
      configContrast = atom.config.get(this.packageName + ".contrast");
      configVariant = atom.config.get(this.packageName + ".variant");
      return brightness === configBrightness && contrast === configContrast && variant === configVariant;
    };

    return Gruvbox;

  })();

  module.exports = new Gruvbox;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvZ3J1dmJveC1wbHVzLXN5bnRheC9saWIvZ3J1dmJveC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQSxNQUFBOztFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7RUFDTCxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVI7O0VBQ04sc0JBQXVCLE9BQUEsQ0FBUSxNQUFSOztFQUVsQjs7O3NCQUVKLE1BQUEsR0FBUSxPQUFBLENBQVEsb0JBQVIsQ0FBNkIsQ0FBQzs7c0JBRXRDLFFBQUEsR0FBVSxTQUFBO01BRVIsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUFJO01BQ25CLElBQUMsQ0FBQSxXQUFELEdBQWUsT0FBQSxDQUFRLGlCQUFSLENBQTBCLENBQUM7TUFDMUMsSUFBQyxDQUFBLFdBQVcsQ0FBQyxHQUFiLENBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUF1QixJQUFDLENBQUEsV0FBRixHQUFjLGFBQXBDLEVBQWtELENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtpQkFBRyxLQUFDLENBQUEsaUJBQUQsQ0FBQTtRQUFIO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsRCxDQUFqQjtNQUNBLElBQUMsQ0FBQSxXQUFXLENBQUMsR0FBYixDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBdUIsSUFBQyxDQUFBLFdBQUYsR0FBYyxXQUFwQyxFQUFnRCxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7aUJBQUcsS0FBQyxDQUFBLGlCQUFELENBQUE7UUFBSDtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEQsQ0FBakI7YUFDQSxJQUFDLENBQUEsV0FBVyxDQUFDLEdBQWIsQ0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQXVCLElBQUMsQ0FBQSxXQUFGLEdBQWMsVUFBcEMsRUFBK0MsQ0FBQSxT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Z0JBQWQsSUFBbUMsUUFBQSxLQUFZLGNBQS9DLElBQWtFLE9BQUEsS0FBVztJQUpoRTs7Ozs7O0VBTWpCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLElBQUk7QUFqRnJCIiwic291cmNlc0NvbnRlbnQiOlsiIyMgQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9BbGNoaWFkdXMvYmFzZTE2LXN5bnRheFxuXG5mcyA9IHJlcXVpcmUgJ2ZzJ1xucGF0aCA9IHJlcXVpcmUgJ3BhdGgnXG57Q29tcG9zaXRlRGlzcG9zYWJsZX0gPSByZXF1aXJlICdhdG9tJ1xuXG5jbGFzcyBHcnV2Ym94XG5cbiAgY29uZmlnOiByZXF1aXJlKCcuL2dydXZib3gtc2V0dGluZ3MnKS5jb25maWdcblxuICBhY3RpdmF0ZTogLT5cblxuICAgIEBkaXNwb3NhYmxlcyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlXG4gICAgQHBhY2thZ2VOYW1lID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykubmFtZVxuICAgIEBkaXNwb3NhYmxlcy5hZGQgYXRvbS5jb25maWcub2JzZXJ2ZSBcIiN7QHBhY2thZ2VOYW1lfS5icmlnaHRuZXNzXCIsID0+IEBlbmFibGVDb25maWdUaGVtZSgpXG4gICAgQGRpc3Bvc2FibGVzLmFkZCBhdG9tLmNvbmZpZy5vYnNlcnZlIFwiI3tAcGFja2FnZU5hbWV9LmNvbnRyYXN0XCIsID0+IEBlbmFibGVDb25maWdUaGVtZSgpXG4gICAgQGRpc3Bvc2FibGVzLmFkZCBhdG9tLmNvbmZpZy5vYnNlcnZlIFwiI3tAcGFja2FnZU5hbWV9LnZhcmlhbnRcIiwgPT4gQGVuYWJsZUNvbmZpZ1RoZW1lKClcblxuICBkZWFjdGl2YXRlOiAtPlxuICAgIEBkaXNwb3NhYmxlcy5kaXNwb3NlKClcblxuICBlbmFibGVDb25maWdUaGVtZTogLT5cbiAgICBicmlnaHRuZXNzID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LmJyaWdodG5lc3NcIlxuICAgIGNvbnRyYXN0ID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LmNvbnRyYXN0XCJcbiAgICB2YXJpYW50ID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LnZhcmlhbnRcIlxuICAgIEBlbmFibGVUaGVtZSBicmlnaHRuZXNzLCBjb250cmFzdCwgdmFyaWFudFxuXG4gIGVuYWJsZVRoZW1lOiAoYnJpZ2h0bmVzcywgY29udHJhc3QsIHZhcmlhbnQpIC0+XG4gICAgIyBObyBuZWVkIHRvIGVuYWJsZSB0aGUgdGhlbWUgaWYgaXQgaXMgYWxyZWFkeSBhY3RpdmUuXG4gICAgcmV0dXJuIGlmIEBpc0FjdGl2ZVRoZW1lIGJyaWdodG5lc3MsIGNvbnRyYXN0LCB2YXJpYW50IHVubGVzcyBAaXNQcmV2aWV3Q29uZmlybWVkXG4gICAgdHJ5XG4gICAgICAjIFdyaXRlIHRoZSByZXF1ZXN0ZWQgdGhlbWUgdG8gdGhlIGBzeW50YXgtdmFyaWFibGVzYCBmaWxlLlxuICAgICAgZnMud3JpdGVGaWxlU3luYyBAZ2V0U3ludGF4VmFyaWFibGVzUGF0aCgpLCBAZ2V0U3ludGF4VmFyaWFibGVzQ29udGVudChicmlnaHRuZXNzLCBjb250cmFzdCwgdmFyaWFudClcbiAgICAgIGFjdGl2ZVBhY2thZ2VzID0gYXRvbS5wYWNrYWdlcy5nZXRBY3RpdmVQYWNrYWdlcygpXG4gICAgICBpZiBhY3RpdmVQYWNrYWdlcy5sZW5ndGggaXMgMCBvciBAaXNQcmV2aWV3XG4gICAgICAgICMgUmVsb2FkIG93biBzdHlsZXNoZWV0cyB0byBhcHBseSB0aGUgcmVxdWVzdGVkIHRoZW1lLlxuICAgICAgICBhdG9tLnBhY2thZ2VzLmdldExvYWRlZFBhY2thZ2UoXCIje0BwYWNrYWdlTmFtZX1cIikucmVsb2FkU3R5bGVzaGVldHMoKVxuICAgICAgZWxzZVxuICAgICAgICAjIFJlbG9hZCB0aGUgc3R5bGVzaGVldHMgb2YgYWxsIHBhY2thZ2VzIHRvIGFwcGx5IHRoZSByZXF1ZXN0ZWQgdGhlbWUuXG4gICAgICAgIGFjdGl2ZVBhY2thZ2UucmVsb2FkU3R5bGVzaGVldHMoKSBmb3IgYWN0aXZlUGFja2FnZSBpbiBhY3RpdmVQYWNrYWdlc1xuICAgICAgQGFjdGl2ZUJyaWdodG5lc3MgPSBicmlnaHRuZXNzXG4gICAgICBAYWN0aXZlQ29udHJhc3QgPSBjb250cmFzdFxuICAgICAgQGFjdGl2ZVZhcmlhbnQgPSB2YXJpYW50XG4gICAgY2F0Y2hcbiAgICAgICMgSWYgdW5zdWNjZXNzZnVsbCBlbmFibGUgdGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICBAZW5hYmxlRGVmYXVsdFRoZW1lKClcblxuICBpc0FjdGl2ZVRoZW1lOiAoYnJpZ2h0bmVzcywgY29udHJhc3QsIHZhcmlhbnQpIC0+XG4gICAgYnJpZ2h0bmVzcyBpcyBAYWN0aXZlQnJpZ2h0bmVzcyBhbmQgY29udHJhc3QgaXMgQGFjdGl2ZUNvbnRyYXN0IGFuZCB2YXJpYW50IGlzIEBhY3RpdmVWYXJpYW50XG5cbiAgZ2V0U3ludGF4VmFyaWFibGVzUGF0aDogLT5cbiAgICBwYXRoLmpvaW4gX19kaXJuYW1lLCBcIi4uXCIsIFwic3R5bGVzXCIsIFwic3ludGF4LXZhcmlhYmxlcy5sZXNzXCJcblxuICBnZXRTeW50YXhWYXJpYWJsZXNDb250ZW50OiAoYnJpZ2h0bmVzcywgY29udHJhc3QsIHZhcmlhbnQpIC0+XG4gICAgXCJcIlwiXG4gICAgQGltcG9ydCAnc2NoZW1lcy8je2JyaWdodG5lc3MudG9Mb3dlckNhc2UoKX0tI3tjb250cmFzdC50b0xvd2VyQ2FzZSgpfSc7XG4gICAgQGltcG9ydCAnc2NoZW1lcy8je2JyaWdodG5lc3MudG9Mb3dlckNhc2UoKX0nO1xuICAgIEBpbXBvcnQgJ2NvbG9ycyc7XG4gICAgQGltcG9ydCAndmFyaWFudHMvI3tAZ2V0Tm9ybWFsaXplZE5hbWUodmFyaWFudCl9JztcbiAgICBcIlwiXCJcblxuICBnZXROb3JtYWxpemVkTmFtZTogKG5hbWUpIC0+XG4gICAgXCIje25hbWV9XCJcbiAgICAgIC5yZXBsYWNlIC9cXCAvZywgJy0nXG4gICAgICAudG9Mb3dlckNhc2UoKVxuXG4gIGVuYWJsZURlZmF1bHRUaGVtZTogLT5cbiAgICBicmlnaHRuZXNzID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LmJyaWdodG5lc3NcIlxuICAgIGNvbnRyYXN0ID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LmNvbnRyYXN0XCJcbiAgICB2YXJpYW50ID0gYXRvbS5jb25maWcuZ2V0IFwiI3tAcGFja2FnZU5hbWV9LnZhcmlhbnRcIlxuICAgIEBzZXRUaGVtZUNvbmZpZyBicmlnaHRuZXNzLCBjb250cmFzdCwgdmFyaWFudFxuXG4gIHNldFRoZW1lQ29uZmlnOiAoYnJpZ2h0bmVzcywgY29udHJhc3QsIHZhcmlhbnQpIC0+XG4gICAgYXRvbS5jb25maWcuc2V0IFwiI3tAcGFja2FnZU5hbWV9LmJyaWdodG5lc3NcIiwgYnJpZ2h0bmVzc1xuICAgIGF0b20uY29uZmlnLnNldCBcIiN7QHBhY2thZ2VOYW1lfS5jb250cmFzdFwiLCBjb250cmFzdFxuICAgIGF0b20uY29uZmlnLnNldCBcIiN7QHBhY2thZ2VOYW1lfS52YXJpYW50XCIsIHZhcmlhbnRcblxuICBpc0NvbmZpZ1RoZW1lOiAoYnJpZ2h0bmVzcywgY29udHJhc3QsIHZhcmlhbnQpIC0+XG4gICAgY29uZmlnQnJpZ2h0bmVzcyA9IGF0b20uY29uZmlnLmdldCBcIiN7QHBhY2thZ2VOYW1lfS5icmlnaHRuZXNzXCJcbiAgICBjb25maWdDb250cmFzdCA9IGF0b20uY29uZmlnLmdldCBcIiN7QHBhY2thZ2VOYW1lfS5jb250cmFzdFwiXG4gICAgY29uZmlnVmFyaWFudCA9IGF0b20uY29uZmlnLmdldCBcIiN7QHBhY2thZ2VOYW1lfS52YXJpYW50XCJcbiAgICBicmlnaHRuZXNzIGlzIGNvbmZpZ0JyaWdodG5lc3MgYW5kIGNvbnRyYXN0IGlzIGNvbmZpZ0NvbnRyYXN0IGFuZCB2YXJpYW50IGlzIGNvbmZpZ1ZhcmlhbnRcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgR3J1dmJveFxuIl19

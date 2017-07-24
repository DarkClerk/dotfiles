(function() {
  var fs, path;

  fs = require('fs');

  path = require('path');

  module.exports = {
    activate: function(state) {
      this.setIconsEnabled(atom.config.get('dash-ui.iconsEnabled'));
      atom.config.onDidChange('dash-ui.themeColor', (function(_this) {
        return function() {
          return _this.setTheme(atom.config.get('dash-ui.themeColor'));
        };
      })(this));
      return atom.config.onDidChange('dash-ui.iconsEnabled', (function(_this) {
        return function() {
          return _this.setIconsEnabled(atom.config.get('dash-ui.iconsEnabled'));
        };
      })(this));
    },
    setTheme: function(color) {
      var atomPackage, fileContent, filePath;
      color = color.toLowerCase();
      fileContent = "@accent: @" + color + ";";
      atomPackage = atom.packages.getLoadedPackage('dash-ui');
      filePath = path.join(atomPackage.path, 'styles', 'theme.less');
      return fs.writeFile(filePath, fileContent, function(err) {
        if (err) {
          console.error('[dash-ui] Failed to save theme file', err);
          return atom.notifications.addError('Failed to save theme color', {
            dismissable: true
          });
        } else {
          atomPackage.deactivate();
          return setImmediate(function() {
            atomPackage.activate();
            return atom.notifications.addSuccess('Reload required', {
              detail: 'For the theme colors to properly update, ' + 'Atom must be reloaded.',
              buttons: [
                {
                  text: 'Reload',
                  className: 'btn',
                  onDidClick: function() {
                    return atom.commands.dispatch(atom.views.getView(atom.workspace), 'window:reload');
                  }
                }
              ],
              dismissable: true,
              icon: 'sync'
            });
          });
        }
      });
    },
    setIconsEnabled: function(value) {
      if (value) {
        return atom.workspace.getElement().classList.add('dash-icons-enabled');
      } else {
        return atom.workspace.getElement().classList.remove('dash-icons-enabled');
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvZGFzaC11aS9saWIvZGFzaC11aS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7RUFDTCxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVI7O0VBRVAsTUFBTSxDQUFDLE9BQVAsR0FDRTtJQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7TUFDUixJQUFDLENBQUEsZUFBRCxDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLENBQWpCO01BRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLG9CQUF4QixFQUE4QyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7aUJBQzVDLEtBQUMsQ0FBQSxRQUFELENBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLG9CQUFoQixDQUFWO1FBRDRDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE5QzthQUdBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QixzQkFBeEIsRUFBZ0QsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUM5QyxLQUFDLENBQUEsZUFBRCxDQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLENBQWpCO1FBRDhDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoRDtJQU5RLENBQVY7SUFTQSxRQUFBLEVBQVUsU0FBQyxLQUFEO0FBQ1IsVUFBQTtNQUFBLEtBQUEsR0FBUSxLQUFLLENBQUMsV0FBTixDQUFBO01BRVIsV0FBQSxHQUFjLFlBQUEsR0FDRixLQURFLEdBQ0k7TUFHbEIsV0FBQSxHQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWQsQ0FBK0IsU0FBL0I7TUFFZCxRQUFBLEdBQVcsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFXLENBQUMsSUFBdEIsRUFDVCxRQURTLEVBRVQsWUFGUzthQUtYLEVBQUUsQ0FBQyxTQUFILENBQWEsUUFBYixFQUF1QixXQUF2QixFQUFvQyxTQUFDLEdBQUQ7UUFDbEMsSUFBRyxHQUFIO1VBQ0UsT0FBTyxDQUFDLEtBQVIsQ0FBYyxxQ0FBZCxFQUFxRCxHQUFyRDtpQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQW5CLENBQTRCLDRCQUE1QixFQUNFO1lBQUEsV0FBQSxFQUFhLElBQWI7V0FERixFQUZGO1NBQUEsTUFBQTtVQUtFLFdBQVcsQ0FBQyxVQUFaLENBQUE7aUJBQ0EsWUFBQSxDQUFhLFNBQUE7WUFDWCxXQUFXLENBQUMsUUFBWixDQUFBO21CQU1BLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBbkIsQ0FBOEIsaUJBQTlCLEVBQ0U7Y0FBQSxNQUFBLEVBQVEsMkNBQUEsR0FDTix3QkFERjtjQUVBLE9BQUEsRUFBUztnQkFDUDtrQkFBQSxJQUFBLEVBQU0sUUFBTjtrQkFDQSxTQUFBLEVBQVcsS0FEWDtrQkFFQSxVQUFBLEVBQVksU0FBQTsyQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFYLENBQW1CLElBQUksQ0FBQyxTQUF4QixDQUF2QixFQUNFLGVBREY7a0JBRFUsQ0FGWjtpQkFETztlQUZUO2NBU0EsV0FBQSxFQUFhLElBVGI7Y0FVQSxJQUFBLEVBQU0sTUFWTjthQURGO1VBUFcsQ0FBYixFQU5GOztNQURrQyxDQUFwQztJQWRRLENBVFY7SUFtREEsZUFBQSxFQUFpQixTQUFDLEtBQUQ7TUFDZixJQUFHLEtBQUg7ZUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQWYsQ0FBQSxDQUEyQixDQUFDLFNBQVMsQ0FBQyxHQUF0QyxDQUEwQyxvQkFBMUMsRUFERjtPQUFBLE1BQUE7ZUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQWYsQ0FBQSxDQUEyQixDQUFDLFNBQVMsQ0FBQyxNQUF0QyxDQUE2QyxvQkFBN0MsRUFIRjs7SUFEZSxDQW5EakI7O0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyJmcyA9IHJlcXVpcmUgJ2ZzJ1xucGF0aCA9IHJlcXVpcmUgJ3BhdGgnXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYWN0aXZhdGU6IChzdGF0ZSkgLT5cbiAgICBAc2V0SWNvbnNFbmFibGVkIGF0b20uY29uZmlnLmdldCAnZGFzaC11aS5pY29uc0VuYWJsZWQnXG5cbiAgICBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAnZGFzaC11aS50aGVtZUNvbG9yJywgPT5cbiAgICAgIEBzZXRUaGVtZSBhdG9tLmNvbmZpZy5nZXQgJ2Rhc2gtdWkudGhlbWVDb2xvcidcblxuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlICdkYXNoLXVpLmljb25zRW5hYmxlZCcsID0+XG4gICAgICBAc2V0SWNvbnNFbmFibGVkIGF0b20uY29uZmlnLmdldCAnZGFzaC11aS5pY29uc0VuYWJsZWQnXG5cbiAgc2V0VGhlbWU6IChjb2xvcikgLT5cbiAgICBjb2xvciA9IGNvbG9yLnRvTG93ZXJDYXNlKClcblxuICAgIGZpbGVDb250ZW50ID0gXCJcIlwiXG4gICAgQGFjY2VudDogQCN7Y29sb3J9O1xuICAgIFwiXCJcIlxuXG4gICAgYXRvbVBhY2thZ2UgPSBhdG9tLnBhY2thZ2VzLmdldExvYWRlZFBhY2thZ2UoJ2Rhc2gtdWknKVxuXG4gICAgZmlsZVBhdGggPSBwYXRoLmpvaW4gYXRvbVBhY2thZ2UucGF0aCxcbiAgICAgICdzdHlsZXMnLFxuICAgICAgJ3RoZW1lLmxlc3MnXG5cbiAgICAjIHRoaXMgaXMgcmVhbGx5IGhhY2t5XG4gICAgZnMud3JpdGVGaWxlIGZpbGVQYXRoLCBmaWxlQ29udGVudCwgKGVycikgLT5cbiAgICAgIGlmIGVyclxuICAgICAgICBjb25zb2xlLmVycm9yICdbZGFzaC11aV0gRmFpbGVkIHRvIHNhdmUgdGhlbWUgZmlsZScsIGVyclxuICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IgJ0ZhaWxlZCB0byBzYXZlIHRoZW1lIGNvbG9yJyxcbiAgICAgICAgICBkaXNtaXNzYWJsZTogeWVzXG4gICAgICBlbHNlXG4gICAgICAgIGF0b21QYWNrYWdlLmRlYWN0aXZhdGUoKVxuICAgICAgICBzZXRJbW1lZGlhdGUgLT5cbiAgICAgICAgICBhdG9tUGFja2FnZS5hY3RpdmF0ZSgpXG5cbiAgICAgICAgICAjIFdoaWxlIHRoaXMgZG9lcyB1cGRhdGUgY29sb3JzIHRoYXQgdXNlIHRoZSB0aGVtZSBjb2xvciBkaXJlY3RseSxcbiAgICAgICAgICAjIGZvciBzb21lIHJlYXNvbiBhbnkgZGVyaXZhdGl2ZSBjb2xvciB3b24ndCBiZSB1cGRhdGVkLCBhbmQgSSBoYXZlXG4gICAgICAgICAgIyBubyBpZGVhIGhvdyBBdG9tIG1hbmFnZXMgc3R5bGUgc2hlZXRzLlxuICAgICAgICAgICMgU28sIGZvciBub3csIGp1c3QgY3JlYXRlIGEgbm90aWZpY2F0aW9uIHRlbGxpbmcgdGhlIHVzZXIgdG8gcmVsb2FkXG4gICAgICAgICAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFN1Y2Nlc3MgJ1JlbG9hZCByZXF1aXJlZCcsXG4gICAgICAgICAgICBkZXRhaWw6ICdGb3IgdGhlIHRoZW1lIGNvbG9ycyB0byBwcm9wZXJseSB1cGRhdGUsICcgK1xuICAgICAgICAgICAgICAnQXRvbSBtdXN0IGJlIHJlbG9hZGVkLidcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgdGV4dDogJ1JlbG9hZCcsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0bicsXG4gICAgICAgICAgICAgIG9uRGlkQ2xpY2s6IC0+XG4gICAgICAgICAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgJ3dpbmRvdzpyZWxvYWQnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBkaXNtaXNzYWJsZTogeWVzXG4gICAgICAgICAgICBpY29uOiAnc3luYydcblxuXG4gIHNldEljb25zRW5hYmxlZDogKHZhbHVlKSAtPlxuICAgIGlmIHZhbHVlXG4gICAgICBhdG9tLndvcmtzcGFjZS5nZXRFbGVtZW50KCkuY2xhc3NMaXN0LmFkZCAnZGFzaC1pY29ucy1lbmFibGVkJ1xuICAgIGVsc2VcbiAgICAgIGF0b20ud29ya3NwYWNlLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlICdkYXNoLWljb25zLWVuYWJsZWQnXG4iXX0=

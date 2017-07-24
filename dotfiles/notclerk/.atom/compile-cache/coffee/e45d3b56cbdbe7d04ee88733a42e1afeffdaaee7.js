(function() {
  module.exports = {
    run: function() {
      var applyFont, body, fixer, fixerProto, triggerMeasurements;
      body = document.querySelector('body');
      triggerMeasurements = function(force) {
        atom.workspace.increaseFontSize();
        return atom.workspace.decreaseFontSize();
      };
      applyFont = function() {
        var font;
        font = "'" + atom.config.get('fonts.fontFamily') + "', " + atom.config.get('fonts.secondaryFonts');
        body.setAttribute('style', '--fonts-package-editorfont: ' + font + ';');
        return triggerMeasurements();
      };
      applyFont();
      this.observer = atom.config.observe('fonts.fontFamily', function() {
        return applyFont();
      });
      this.observer = atom.config.observe('fonts.secondaryFonts', function() {
        return applyFont();
      });
      setTimeout((function() {
        return triggerMeasurements();
      }), 500);
      if (document.getElementsByTagName('fonts-fixer').length === 0) {
        fixerProto = Object.create(HTMLElement.prototype);
        fixerProto.createdCallback = function() {
          this.innerHTML = "regular<b>bold<i>italic</i></b><i>italic</i>";
        };
        fixer = document.registerElement("fonts-fixer", {
          prototype: fixerProto
        });
        return atom.views.getView(atom.workspace).appendChild(new fixer());
      }
    },
    stop: function() {
      var body, ref;
      body = document.querySelector('body');
      body.removeAttribute('fonts-editor-font');
      return (ref = this.observer) != null ? ref.dispose() : void 0;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvZm9udHMvbGliL3J1bm5lci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUNFO0lBQUEsR0FBQSxFQUFLLFNBQUE7QUFDSCxVQUFBO01BQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCO01BRVAsbUJBQUEsR0FBc0IsU0FBQyxLQUFEO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWYsQ0FBQTtlQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWYsQ0FBQTtNQUZvQjtNQUl0QixTQUFBLEdBQVksU0FBQTtBQUNWLFlBQUE7UUFBQSxJQUFBLEdBQ0UsR0FBQSxHQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixrQkFBaEIsQ0FEQSxHQUVBLEtBRkEsR0FHQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCO1FBRUYsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsOEJBQUEsR0FBaUMsSUFBakMsR0FBd0MsR0FBbkU7ZUFDQSxtQkFBQSxDQUFBO01BUlU7TUFXWixTQUFBLENBQUE7TUFJQSxJQUFDLENBQUEsUUFBRCxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQixrQkFBcEIsRUFBd0MsU0FBQTtlQUNsRCxTQUFBLENBQUE7TUFEa0QsQ0FBeEM7TUFFWixJQUFDLENBQUEsUUFBRCxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQixzQkFBcEIsRUFBNEMsU0FBQTtlQUN0RCxTQUFBLENBQUE7TUFEc0QsQ0FBNUM7TUFLWixVQUFBLENBQVcsQ0FBQyxTQUFBO2VBQ1YsbUJBQUEsQ0FBQTtNQURVLENBQUQsQ0FBWCxFQUVHLEdBRkg7TUFJQSxJQUFHLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixhQUE5QixDQUE0QyxDQUFDLE1BQTdDLEtBQXVELENBQTFEO1FBR0UsVUFBQSxHQUFhLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBVyxDQUFBLFNBQXpCO1FBQ2IsVUFBVSxDQUFDLGVBQVgsR0FBNkIsU0FBQTtVQUMzQixJQUFDLENBQUEsU0FBRCxHQUFhO1FBRGM7UUFJN0IsS0FBQSxHQUFRLFFBQVEsQ0FBQyxlQUFULENBQXlCLGFBQXpCLEVBQ047VUFBQSxTQUFBLEVBQVcsVUFBWDtTQURNO2VBSVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFYLENBQW1CLElBQUksQ0FBQyxTQUF4QixDQUFrQyxDQUFDLFdBQW5DLENBQW1ELElBQUEsS0FBQSxDQUFBLENBQW5ELEVBWkY7O0lBakNHLENBQUw7SUErQ0EsSUFBQSxFQUFNLFNBQUE7QUFDSixVQUFBO01BQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCO01BQ1AsSUFBSSxDQUFDLGVBQUwsQ0FBcUIsbUJBQXJCO2dEQUVTLENBQUUsT0FBWCxDQUFBO0lBSkksQ0EvQ047O0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XG4gIHJ1bjogKCkgLT5cbiAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgICB0cmlnZ2VyTWVhc3VyZW1lbnRzID0gKGZvcmNlKSAtPlxuICAgICAgYXRvbS53b3Jrc3BhY2UuaW5jcmVhc2VGb250U2l6ZSgpXG4gICAgICBhdG9tLndvcmtzcGFjZS5kZWNyZWFzZUZvbnRTaXplKClcblxuICAgIGFwcGx5Rm9udCA9ICgpIC0+XG4gICAgICBmb250ID1cbiAgICAgICAgXCInXCIgK1xuICAgICAgICBhdG9tLmNvbmZpZy5nZXQoJ2ZvbnRzLmZvbnRGYW1pbHknKSArXG4gICAgICAgIFwiJywgXCIgK1xuICAgICAgICBhdG9tLmNvbmZpZy5nZXQoJ2ZvbnRzLnNlY29uZGFyeUZvbnRzJylcblxuICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJy0tZm9udHMtcGFja2FnZS1lZGl0b3Jmb250OiAnICsgZm9udCArICc7JylcbiAgICAgIHRyaWdnZXJNZWFzdXJlbWVudHMoKVxuXG4gICAgIyBhcHBseSBmb250cyB3aGVuIGF0b20gaXMgcmVhZHlcbiAgICBhcHBseUZvbnQoKVxuXG4gICAgIyBhcHBseSBmb250cyB3aGVuIGNvbmZpZyBjaGFuZ2VzXG4gICAgIyBhZnRlciBjb25maWcgY2hhbmdlcyBtZWFzdXJlbWVudHMgYXJlIGFscmVhZHkgdHJpZ2dlcmVkIGJ5IGF0b21cbiAgICBAb2JzZXJ2ZXIgPSBhdG9tLmNvbmZpZy5vYnNlcnZlICdmb250cy5mb250RmFtaWx5JywgLT5cbiAgICAgIGFwcGx5Rm9udCgpXG4gICAgQG9ic2VydmVyID0gYXRvbS5jb25maWcub2JzZXJ2ZSAnZm9udHMuc2Vjb25kYXJ5Rm9udHMnLCAtPlxuICAgICAgYXBwbHlGb250KClcblxuICAgICMgZ2l2ZSBjaHJvbWl1bSBzb21lIHRpbWUgdG8gbG9hZCB0aGUgZm9udHNcbiAgICAjIHRoZW4gdHJpZ2dlciBtZWFzdXJlbWVudHNcbiAgICBzZXRUaW1lb3V0ICgtPlxuICAgICAgdHJpZ2dlck1lYXN1cmVtZW50cygpXG4gICAgKSwgNTAwXG5cbiAgICBpZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9udHMtZml4ZXInKS5sZW5ndGggaXMgMFxuICAgICAgIyBjcmVhdGUgYSBmaXhlciBlbGVtZW50IHRoYXQgZm9yY2VzIGNocm9tZSB0byBsb2FkIGZvbnQgc3R5bGVzXG4gICAgICAjIGNvbnRhaW5zICpyKmVndWxhciwgKmIqb2xkLCAqaSp0YWxpYyBhbmQgaSBpbiBiXG4gICAgICBmaXhlclByb3RvID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudDo6KVxuICAgICAgZml4ZXJQcm90by5jcmVhdGVkQ2FsbGJhY2sgPSAtPlxuICAgICAgICBAaW5uZXJIVE1MID0gXCJyZWd1bGFyPGI+Ym9sZDxpPml0YWxpYzwvaT48L2I+PGk+aXRhbGljPC9pPlwiXG4gICAgICAgIHJldHVyblxuXG4gICAgICBmaXhlciA9IGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChcImZvbnRzLWZpeGVyXCIsXG4gICAgICAgIHByb3RvdHlwZTogZml4ZXJQcm90b1xuICAgICAgKVxuXG4gICAgICBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpLmFwcGVuZENoaWxkKG5ldyBmaXhlcigpKVxuXG4gIHN0b3A6IC0+XG4gICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdmb250cy1lZGl0b3ItZm9udCcpXG5cbiAgICBAb2JzZXJ2ZXI/LmRpc3Bvc2UoKVxuIl19

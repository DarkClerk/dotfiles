(function() {
  var Animal, OPERATOR, grade, heredoc, hi, math, race, square, two,
    slice = [].slice,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  grade = function(student, period, messages) {
    if (period == null) {
      period = (typeof b !== "undefined" && b !== null ? 7 : 6);
    }
    if (messages == null) {
      messages = {
        "A": "Excellent"
      };
    }
    if (student.excellentWork) {
      return "A+";
    } else if (student.okayStuff) {
      if (student.triedHard) {
        return "B";
      } else {
        return "B-";
      }
    } else {
      return "C";
    }
  };

  square = function(x) {
    return x * x;
  };

  two = function() {
    return 2;
  };

  math = {
    root: Math.sqrt,
    square: square,
    cube: function(x) {
      return x * square(x);
    }
  };

  race = function() {
    var runners, winner;
    winner = arguments[0], runners = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return print(winner, runners);
  };

  Animal = (function(superClass) {
    extend(Animal, superClass);

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.move = function(meters) {
      return alert(this.name + (" moved " + meters + "m."));
    };

    return Animal;

  })(Being);

  hi = function() {
  return [document.title, "Hello JavaScript"].join(": ");
};

  heredoc = "CoffeeScript subst test " + (0x8 + 0xf / 0x2 + ("nested string " + /\n/));


  /*
  CoffeeScript Compiler v1.2.0
  Released under the MIT License
   */

  OPERATOR = /^(?:[-=]>)/;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvZ3J1dmJveC9zcGVjL2NvZmZlZXNjcmlwdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLDZEQUFBO0lBQUE7Ozs7RUFBQSxLQUFBLEdBQVEsU0FBQyxPQUFELEVBQVUsTUFBVixFQUF3QyxRQUF4Qzs7TUFBVSxTQUFPLENBQUksc0NBQUgsR0FBVyxDQUFYLEdBQWtCLENBQW5COzs7TUFBdUIsV0FBUztRQUFDLEdBQUEsRUFBSyxXQUFOOzs7SUFDdkQsSUFBRyxPQUFPLENBQUMsYUFBWDthQUNFLEtBREY7S0FBQSxNQUVLLElBQUcsT0FBTyxDQUFDLFNBQVg7TUFDSCxJQUFHLE9BQU8sQ0FBQyxTQUFYO2VBQTBCLElBQTFCO09BQUEsTUFBQTtlQUFtQyxLQUFuQztPQURHO0tBQUEsTUFBQTthQUdILElBSEc7O0VBSEM7O0VBUVIsTUFBQSxHQUFTLFNBQUMsQ0FBRDtXQUFPLENBQUEsR0FBSTtFQUFYOztFQUVULEdBQUEsR0FBTSxTQUFBO1dBQUc7RUFBSDs7RUFFTixJQUFBLEdBQ0U7SUFBQSxJQUFBLEVBQVEsSUFBSSxDQUFDLElBQWI7SUFDQSxNQUFBLEVBQVEsTUFEUjtJQUVBLElBQUEsRUFBUSxTQUFDLENBQUQ7YUFBTyxDQUFBLEdBQUksTUFBQSxDQUFPLENBQVA7SUFBWCxDQUZSOzs7RUFJRixJQUFBLEdBQU8sU0FBQTtBQUNMLFFBQUE7SUFETSx1QkFBUTtXQUNkLEtBQUEsQ0FBTSxNQUFOLEVBQWMsT0FBZDtFQURLOztFQUdEOzs7SUFDUyxnQkFBQyxJQUFEO01BQUMsSUFBQyxDQUFBLE9BQUQ7SUFBRDs7cUJBRWIsSUFBQSxHQUFNLFNBQUMsTUFBRDthQUNKLEtBQUEsQ0FBTSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsU0FBQSxHQUFVLE1BQVYsR0FBaUIsSUFBakIsQ0FBZDtJQURJOzs7O0tBSGE7O0VBTXJCLEVBQUEsR0FBSzs7OztFQUlMLE9BQUEsR0FBVSwwQkFBQSxHQUNlLENBQUUsR0FBQSxHQUFRLEdBQUEsR0FBTSxHQUFkLEdBQXFCLENBQUEsZ0JBQUEsR0FBa0IsSUFBbEIsQ0FBdkI7OztBQUd6Qjs7Ozs7RUFLQSxRQUFBLEdBQVc7QUF2Q1giLCJzb3VyY2VzQ29udGVudCI6WyJncmFkZSA9IChzdHVkZW50LCBwZXJpb2Q9KGlmIGI/IHRoZW4gNyBlbHNlIDYpLCBtZXNzYWdlcz17XCJBXCI6IFwiRXhjZWxsZW50XCJ9KSAtPlxuICBpZiBzdHVkZW50LmV4Y2VsbGVudFdvcmtcbiAgICBcIkErXCJcbiAgZWxzZSBpZiBzdHVkZW50Lm9rYXlTdHVmZlxuICAgIGlmIHN0dWRlbnQudHJpZWRIYXJkIHRoZW4gXCJCXCIgZWxzZSBcIkItXCJcbiAgZWxzZVxuICAgIFwiQ1wiXG5cbnNxdWFyZSA9ICh4KSAtPiB4ICogeFxuXG50d28gPSAtPiAyXG5cbm1hdGggPVxuICByb290OiAgIE1hdGguc3FydFxuICBzcXVhcmU6IHNxdWFyZVxuICBjdWJlOiAgICh4KSAtPiB4ICogc3F1YXJlIHhcblxucmFjZSA9ICh3aW5uZXIsIHJ1bm5lcnMuLi4pIC0+XG4gIHByaW50IHdpbm5lciwgcnVubmVyc1xuXG5jbGFzcyBBbmltYWwgZXh0ZW5kcyBCZWluZ1xuICBjb25zdHJ1Y3RvcjogKEBuYW1lKSAtPlxuXG4gIG1vdmU6IChtZXRlcnMpIC0+XG4gICAgYWxlcnQgQG5hbWUgKyBcIiBtb3ZlZCAje21ldGVyc31tLlwiXG5cbmhpID0gYGZ1bmN0aW9uKCkge1xuICByZXR1cm4gW2RvY3VtZW50LnRpdGxlLCBcIkhlbGxvIEphdmFTY3JpcHRcIl0uam9pbihcIjogXCIpO1xufWBcblxuaGVyZWRvYyA9IFwiXCJcIlxuQ29mZmVlU2NyaXB0IHN1YnN0IHRlc3QgI3sgMG8wMTAgKyAweGYgLyAwYjEwICsgXCJuZXN0ZWQgc3RyaW5nICN7IC9cXG4vIH1cIn1cblwiXCJcIlxuXG4jIyNcbkNvZmZlZVNjcmlwdCBDb21waWxlciB2MS4yLjBcblJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuIyMjXG5cbk9QRVJBVE9SID0gLy8vIF4gKFxuPzogWy09XT4gICAgICAgICAgICAgIyBmdW5jdGlvblxuKSAvLy9cbiJdfQ==

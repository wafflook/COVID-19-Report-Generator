
 /*! 
  * portal-vue © Thorsten Lünborg, 2021 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (factory((global.VuePortal = {}),global.Vue));
}(this, (function (exports,Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

  var regenerator = runtime_1;

  var inBrowser = typeof window !== 'undefined';
  function freeze(item) {
    if (Array.isArray(item) || _typeof(item) === 'object') {
      return Object.freeze(item);
    }

    return item;
  }
  function combinePassengers(transports) {
    var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return transports.reduce(function (passengers, transport) {
      var temp = transport.passengers[0];
      var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
      return passengers.concat(newPassengers);
    }, []);
  }
  function stableSort(array, compareFn) {
    return array.map(function (v, idx) {
      return [idx, v];
    }).sort(function (a, b) {
      return compareFn(a[1], b[1]) || a[0] - b[0];
    }).map(function (c) {
      return c[1];
    });
  }
  function pick(obj, keys) {
    return keys.reduce(function (acc, key) {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key];
      }

      return acc;
    }, {});
  }

  var transports = {};
  var targets = {};
  var sources = {};
  var Wormhole = Vue.extend({
    data: function data() {
      return {
        transports: transports,
        targets: targets,
        sources: sources,
        trackInstances: inBrowser
      };
    },
    methods: {
      open: function open(transport) {
        if (!inBrowser) return; // クラス名を付与

        var to = transport.to,
            from = transport.from,
            classes = transport.classes,
            passengers = transport.passengers,
            _transport$order = transport.order,
            order = _transport$order === void 0 ? Infinity : _transport$order;
        if (!to || !from || !passengers) return;
        var newTransport = {
          to: to,
          from: from,
          // クラス名を付与
          classes: classes,
          passengers: freeze(passengers),
          order: order
        };
        var keys = Object.keys(this.transports);

        if (keys.indexOf(to) === -1) {
          Vue.set(this.transports, to, []);
        }

        var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

        var newTransports = this.transports[to].slice(0);

        if (currentIndex === -1) {
          newTransports.push(newTransport);
        } else {
          newTransports[currentIndex] = newTransport;
        }

        this.transports[to] = stableSort(newTransports, function (a, b) {
          return a.order - b.order;
        });
      },
      close: function close(transport) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var to = transport.to,
            from = transport.from;
        if (!to || !from && force === false) return;

        if (!this.transports[to]) {
          return;
        }

        if (force) {
          this.transports[to] = [];
        } else {
          var index = this.$_getTransportIndex(transport);

          if (index >= 0) {
            // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
            var newTransports = this.transports[to].slice(0);
            newTransports.splice(index, 1);
            this.transports[to] = newTransports;
          }
        }
      },
      registerTarget: function registerTarget(target, vm, force) {
        if (!inBrowser) return;

        if (this.trackInstances && !force && this.targets[target]) {
          console.warn("[portal-vue]: Target ".concat(target, " already exists"));
        }

        this.$set(this.targets, target, Object.freeze([vm]));
      },
      unregisterTarget: function unregisterTarget(target) {
        this.$delete(this.targets, target);
      },
      registerSource: function registerSource(source, vm, force) {
        if (!inBrowser) return;

        if (this.trackInstances && !force && this.sources[source]) {
          console.warn("[portal-vue]: source ".concat(source, " already exists"));
        }

        this.$set(this.sources, source, Object.freeze([vm]));
      },
      unregisterSource: function unregisterSource(source) {
        this.$delete(this.sources, source);
      },
      hasTarget: function hasTarget(to) {
        return !!(this.targets[to] && this.targets[to][0]);
      },
      hasSource: function hasSource(to) {
        return !!(this.sources[to] && this.sources[to][0]);
      },
      hasContentFor: function hasContentFor(to) {
        return !!this.transports[to] && !!this.transports[to].length;
      },
      // Internal
      $_getTransportIndex: function $_getTransportIndex(_ref) {
        var to = _ref.to,
            from = _ref.from;

        for (var i in this.transports[to]) {
          if (this.transports[to][i].from === from) {
            return +i;
          }
        }

        return -1;
      }
    }
  });
  var wormhole = new Wormhole(transports);

  var _id = 1;
  var Portal = Vue.extend({
    name: 'portal',
    props: {
      disabled: {
        type: Boolean
      },
      name: {
        type: String,
        default: function _default() {
          return String(_id++);
        }
      },
      order: {
        type: Number,
        default: 0
      },
      slim: {
        type: Boolean
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      tag: {
        type: String,
        default: 'DIV'
      },
      to: {
        type: String,
        default: function _default() {
          return String(Math.round(Math.random() * 10000000));
        }
      }
    },
    created: function created() {
      var _this = this;

      this.$nextTick(function () {
        wormhole.registerSource(_this.name, _this);
      });
    },
    mounted: function () {
      var _mounted = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.disabled) {
                  _context.next = 5;
                  break;
                }

                this.sendUpdate();
                /*
                 * TransportInput {} の構築後にマウントイベントを発行
                 */

                _context.next = 4;
                return this.$nextTick();

              case 4:
                this.$emit('mount');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }(),
    updated: function updated() {
      if (this.disabled) {
        this.clear();
      } else {
        this.sendUpdate();
      }
    },
    beforeDestroy: function beforeDestroy() {
      wormhole.unregisterSource(this.name);
      this.clear();
    },
    watch: {
      to: function to(newValue, oldValue) {
        oldValue && oldValue !== newValue && this.clear(oldValue);
        this.sendUpdate();
      }
    },
    methods: {
      clear: function clear(target) {
        var closer = {
          from: this.name,
          to: target || this.to
        };
        wormhole.close(closer);
      },
      normalizeSlots: function normalizeSlots() {
        return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
      },
      normalizeOwnChildren: function normalizeOwnChildren(children) {
        return typeof children === 'function' ? children(this.slotProps) : children;
      },
      sendUpdate: function sendUpdate() {
        var _this2 = this;

        var slotContent = this.normalizeSlots(); // after... inserted.addClass

        this.$nextTick(function () {
          if (slotContent) {
            var transport = {
              from: _this2.name,
              to: _this2.to,

              /*
               * Example
               *
               *  <portal :to='uid' class='afrain' v-vue.draft>
               *
               *    1.this.$vnode.data.staticClass
               *      COMOPNENT-LOAD時に解析したクラス名
               *    2.this.$vnode.context.$el.className
               *      DOM-MOUNT後に追加したクラス名（今回はディレクティブを利用）
               *
               *  この２種類のクラス名を結合するために$nextTick()後に両者を結合して追加する
               *
               *  ディレクティブ
               *   Vue.directive('vue',{
               *     inserted:function(el,binding,vnode){
               *       $(el).addClass(vnode.context.$options.name)
               *       $(el).addClass(Object.keys(binding.modifiers))
               *     }
               *   })
               *
               */
              classes: [_this2.$vnode.context ? _this2.$vnode.context.$el.className : '', _this2.$vnode.data ? _this2.$vnode.data.staticClass : ''].filter(Boolean).join(' '),
              passengers: _toConsumableArray(slotContent),
              order: _this2.order
            };
            wormhole.open(transport);
          } else {
            _this2.clear();
          }
        });
      }
    },
    render: function render(h) {
      var children = this.$slots.default || this.$scopedSlots.default || [];
      var Tag = this.tag;

      if (children && this.disabled) {
        return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
      } else {
        return this.slim ? h() : h(Tag, {
          class: {
            'v-portal': true
          },
          style: {
            display: 'none'
          },
          key: 'v-portal-placeholder'
        });
      }
    }
  });

  var PortalTarget = Vue.extend({
    name: 'portalTarget',
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      slim: {
        type: Boolean,
        default: false
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      tag: {
        type: String,
        default: 'div'
      },
      transition: {
        type: [String, Object, Function]
      }
    },
    data: function data() {
      return {
        transports: wormhole.transports,
        firstRender: true
      };
    },
    created: function created() {
      var _this = this;

      this.$nextTick(function () {
        wormhole.registerTarget(_this.name, _this);
      });
    },
    watch: {
      ownTransports: function ownTransports() {
        this.$emit('change', this.children().length > 0);
      },
      name: function name(newVal, oldVal) {
        /**
         * TODO
         * This should warn as well ...
         */
        wormhole.unregisterTarget(oldVal);
        wormhole.registerTarget(newVal, this);
      }
    },
    mounted: function mounted() {
      var _this2 = this;

      if (this.transition) {
        this.$nextTick(function () {
          // only when we have a transition, because it causes a re-render
          _this2.firstRender = false;
        });
      }

      this.$emit('mount');
    },
    beforeDestroy: function beforeDestroy() {
      wormhole.unregisterTarget(this.name);
    },
    computed: {
      ownTransports: function ownTransports() {
        var transports = this.transports[this.name] || [];

        if (this.multiple) {
          return transports;
        }

        return transports.length === 0 ? [] : [transports[transports.length - 1]];
      },
      classes: function classes() {
        /*
         *
         * Example
         *
         *  複数の要素をポータルする時' from.elems -> to.target { multiple:true }
         *
         *  from
         *    <portal name="destination" :order="2" class='two'> <p>some content</p> </portal>
         *    <portal name="destination" :order="1" class='one> <p>some other content</p> </portal>
         *  to
         *    <portal-target name="destination" multiple="true">
         *
         *  すべてのクラス名を付与した上でマウントを行う
         *
         *    <div class="one two vue-portal-target">
         *      <p>some other content</p>
         *      <p>some content</p>
         *   </div>
         *
         */
        return this.ownTransports.map(function (o) {
          return o.classes;
        });
      },
      passengers: function passengers() {
        return combinePassengers(this.ownTransports, this.slotProps);
      }
    },
    methods: {
      // can't be a computed prop because it has to "react" to $slot changes.
      children: function children() {
        return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
      },
      // can't be a computed prop because it has to "react" to this.children().
      noWrapper: function noWrapper() {
        var noWrapper = this.slim && !this.transition;

        if (noWrapper && this.children().length > 1) {
          console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
        }

        return noWrapper;
      }
    },
    render: function render(h) {
      var noWrapper = this.noWrapper();
      var children = this.children();
      var Tag = this.transition || this.tag;
      return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
        props: {
          // if we have a transition component, pass the tag if it exists
          tag: this.transition && this.tag ? this.tag : undefined
        },
        class: ['vue-portal-target'].concat(_toConsumableArray(this.classes))
      }, children);
    }
  });

  var _id$1 = 0;
  var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
  var targetProps = ['multiple', 'transition'];
  var MountingPortal = Vue.extend({
    name: 'MountingPortal',
    inheritAttrs: false,
    props: {
      append: {
        type: [Boolean, String]
      },
      bail: {
        type: Boolean
      },
      mountTo: {
        type: String,
        required: true
      },
      // Portal
      disabled: {
        type: Boolean
      },
      // name for the portal
      name: {
        type: String,
        default: function _default() {
          return 'mounted_' + String(_id$1++);
        }
      },
      order: {
        type: Number,
        default: 0
      },
      slim: {
        type: Boolean
      },
      slotProps: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      tag: {
        type: String,
        default: 'DIV'
      },
      // name for the target
      to: {
        type: String,
        default: function _default() {
          return String(Math.round(Math.random() * 10000000));
        }
      },
      // Target
      multiple: {
        type: Boolean,
        default: false
      },
      targetSlim: {
        type: Boolean
      },
      targetSlotProps: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      targetTag: {
        type: String,
        default: 'div'
      },
      transition: {
        type: [String, Object, Function]
      }
    },
    created: function created() {
      if (typeof document === 'undefined') return;
      var el = document.querySelector(this.mountTo);

      if (!el) {
        console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
        return;
      }

      var props = this.$props; // Target already exists

      if (wormhole.targets[props.name]) {
        if (props.bail) {
          console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
        } else {
          this.portalTarget = wormhole.targets[props.name];
        }

        return;
      }

      var append = props.append;

      if (append) {
        var type = typeof append === 'string' ? append : 'DIV';
        var mountEl = document.createElement(type);
        el.appendChild(mountEl);
        el = mountEl;
      } // get props for target from $props
      // we have to rename a few of them


      var _props = pick(this.$props, targetProps);

      _props.slim = this.targetSlim;
      _props.tag = this.targetTag;
      _props.slotProps = this.targetSlotProps;
      _props.name = this.to;
      this.portalTarget = new PortalTarget({
        el: el,
        parent: this.$parent || this,
        propsData: _props
      });
    },
    beforeDestroy: function beforeDestroy() {
      var target = this.portalTarget;

      if (this.append) {
        var el = target.$el;
        el.parentNode.removeChild(el);
      }

      target.$destroy();
    },
    render: function render(h) {
      if (!this.portalTarget) {
        console.warn("[portal-vue] Target wasn't mounted");
        return h();
      } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


      if (!this.$scopedSlots.manual) {
        var props = pick(this.$props, portalProps);
        return h(Portal, {
          props: props,
          attrs: this.$attrs,
          on: this.$listeners,
          scopedSlots: this.$scopedSlots
        }, this.$slots.default);
      } // else, we render the scoped slot


      var content = this.$scopedSlots.manual({
        to: this.to
      }); // if user used <template> for the scoped slot
      // content will be an array

      if (Array.isArray(content)) {
        content = content[0];
      }

      if (!content) return h();
      return content;
    }
  });

  function install(Vue$$1) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue$$1.component(options.portalName || 'Portal', Portal);
    Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
    Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
  }

  if ( // @ts-ignore
  typeof window !== 'undefined' && window.Vue && window.Vue === Vue) {
    window.Vue.use({
      install: install
    });
  }

  var index = {
    install: install
  };

  exports.default = index;
  exports.Portal = Portal;
  exports.PortalTarget = PortalTarget;
  exports.MountingPortal = MountingPortal;
  exports.Wormhole = wormhole;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

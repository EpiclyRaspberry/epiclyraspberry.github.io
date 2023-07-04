var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    return Vector2;
}());
var Vec2 = /** @class */ (function (_super) {
    __extends(Vec2, _super);
    /**
     * A better Vector2 class with more methods
     *
     * @param x - x coordinate
     * @param y - y coordinate
     */
    function Vec2(x, y) {
        return _super.call(this, x, y) || this;
    }
    // static methods
    /**
     * Adds two vectors together
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a new vector
     */
    Vec2.add = function (v1, v2) {
        return new Vec2(v1.x + v2.x, v1.y + v2.y);
    };
    /**
     * Subtracts two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a new vector
     */
    Vec2.sub = function (v1, v2) {
        return new Vec2(v1.x - v2.x, v1.y - v2.y);
    };
    /**
     * Multiplies two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a new vector
     */
    Vec2.mul = function (v1, v2) {
        return new Vec2(v1.x * v2.x, v1.y * v2.y);
    };
    /**
     * Divides two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a new vector
     */
    Vec2.div = function (v1, v2) {
        return new Vec2(v1.x / v2.x, v1.y / v2.y);
    };
    /**
     * Returns the dot product of two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a number
     */
    Vec2.dot = function (v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    };
    /**
     * Returns the cross product of two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a number
     */
    Vec2.cross = function (v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    };
    /**
     * Returns the angle between two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns angle in radians
     */
    Vec2.angle = function (v1, v2) {
        var dx = v2.x - v1.x;
        var dy = v2.y - v1.y;
        return Math.atan2(dy, dx);
    };
    /**
     * Returns the distance between two vectors
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @returns a number
     */
    Vec2.distance = function (v1, v2) {
        var dx = v2.x - v1.x;
        var dy = v2.y - v1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    /**
     * Linear Interpolation (lerp) is a mathematical operation that smoothly transitions between two values over a specified fraction of the distance.
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @param t - fraction of the distance
     * @returns a new vector
     * @see https://en.wikipedia.org/wiki/Linear_interpolation
     */
    Vec2.lerp = function (v1, v2, t) {
        return new Vec2(v1.x + (v2.x - v1.x) * t, v1.y + (v2.y - v1.y) * t);
    };
    /**
     * Quadratic Bezier Curve
     *
     * @param v1 - first vector
     * @param v2 - second vector
     * @param v3 - third vector
     * @param t - fraction of the distance
     * @returns a new vector
     * @see https://en.wikipedia.org/wiki/B%C3%A9zier_curve
     */
    Vec2.bezier = function (v1, v2, v3, t) {
        var v12 = Vec2.lerp(v1, v2, t);
        var v23 = Vec2.lerp(v2, v3, t);
        return Vec2.lerp(v12, v23, t);
    };
    Vec2.equals = function (v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    };
    // instance methods 
    Vec2.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Vec2.prototype.normalize = function () {
        var len = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x = this.x / len;
        this.y = this.y / len;
        return this;
    };
    /**
     * Rotates a vector around a pivot point
     *
     * @param pivot - pivot point
     * @param angle - angle in degrees
     * @returns a new vector
     */
    Vec2.prototype.rotate = function (pivot, angle) {
        var dx = this.x - pivot.x;
        var dy = this.y - pivot.y;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        this.x = dx * cos - dy * sin + pivot.x;
        this.y = dx * sin + dy * cos + pivot.y;
        return this;
    };
    return Vec2;
}(Vector2));
var vec1 = new Vec2(0, 0);
var vec2 = new Vec2(3, 0);
console.log(vec2.rotate(vec1, 45).toString());

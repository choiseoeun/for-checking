'use strict';

module.exports = function (sequelize, DataTypes) {
    const user_like = sequelize.define("user_like", {
        userId: {
            field: "userId",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        booktrailerId: {
            field: "booktrailerId",
            type: DataTypes.INTEGER,
            allowNull: null
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user_like"
        });

    return user_like;
}
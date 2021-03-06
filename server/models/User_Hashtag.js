'use strict';

module.exports = function (sequelize, DataTypes) {
    const user_hashtag = sequelize.define("User_Hashtag", {
        userId: {
            field: "userId",
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        hashtagId: {
            field: "hashtagId",
            type: DataTypes.INTEGER,
            allowNull: null,
            primaryKey: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user_hashtag"
        });

    return user_hashtag;
}
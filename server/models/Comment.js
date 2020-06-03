'use strict';

module.exports = function (sequelize, DataTypes) {
    const comment = sequelize.define("Comment", {
        userId: {
            field: "userId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        postId: {
            field: "postId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: null
        },
        comment: {
            field: "comment",
            type: DataTypes.STRING
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "comment"
        });

    return comment;
}
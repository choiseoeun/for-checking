const express = require('express');
const router = express.Router();
const models = require('../models/index');

const sequelize = require('sequelize');
const Op = sequelize.Op;
const axios = require('axios');

const naverAPI = require('../config/naverAPI');


//=================================
//             Search
//=================================

// =========================== 키워드 검색 ===========================
router.get('/:searchWord',(req,res) => {
    //검색할 단어 추출
    var searchWord = req.params.searchWord;

    //BookTrailer테이블의 title, author, content에 해당 키워드가 있다면 추출
    models.BookTrailer.findAll({
        where:{
            [Op.or]:[
                {
                    title:{
                        [Op.like]: "%"+searchWord+"%"
                    }
                },
                {
                    author:{
                        [Op.like]: "%"+searchWord+"%"
                    }
                },
                {
                    content:{
                        [Op.like]: "%"+searchWord+"%"
                    }
                }
            ]
        }
    }).then(result => {
        return res.json({
            isSearchSuccess:true,
            data:result
        });
    }).catch(err => {
        return res.json({
            isSearchSuccess:false,
            message:err
        });
    });
});

router.get('/APISearch/:searchWord',(req,res) => {
    var searchWord = req.params.searchWord;
    
    axios.get('https://openapi.naver.com/v1/search/book_adv',{
        params:{
            d_titl: searchWord,
            display: 25
        },
        headers: {
            'X-Naver-Client-Id': naverAPI.clientId,
            'X-Naver-Client-Secret': naverAPI.clientSecret
        }
    }).then(result => {
        return res.json({
            isSearchSuccess: true,
            data: result.data.items
        });
    })
});


router.get('/user', (req, res) => {
    var userId = req.cookies.id;
    models.users.findOne({where:{id:userId}}).then(result=>{
        return res.json({
            isSearchSuccess: true,
            data: result
        });
    }).catch(err=>{
        return res.json({
            isSearchSuccess: false,
            message: "wrongUserInformation"
        });
    });
});

module.exports = router;
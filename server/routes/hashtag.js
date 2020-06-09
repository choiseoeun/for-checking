const express = require('express');
const router = express.Router();
const models = require('../models/index');


//=================================
//             Hashtag
//=================================

// =========================== 카테고리 목록 가져오기 ===========================
router.get('/', (req, res) => {
    models.Category.findAll({}).then(result => {
        return res.json(result);
    })
})

// =========================== 카테고리 선택한 거 가져오기 ===========================
router.post('/select', (req, res) => {
    if (req.body.length === 0) {
        return res.json({
            categorySelectSuccess: false,
            message: "해시태그를 선택해주세요"
        });
    } else {
        return res.json({
            categorySelectSuccess: true,
            message: "해시태그 선택 성공"
        })
    }
})

// =========================== 북트레일러에 해당하는 해시태그 가져오기 ===========================
router.post('/trailer_hashtag', (req, res) => {
    const booktrailerId = req.body.booktrailerId;
    
    //해시태그 가져오기
})

module.exports = router;
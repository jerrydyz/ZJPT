<template>
  <div class="textpaper">
    <div class="title">
      <div class="top w clearfix">
        <p class="fl">河南省继续教育学会在线学习平台</p>
        <p class="fr">
          <span class="spn1">首页</span>
          <span>退出</span>
        </p>
      </div>
    </div>
    <div class="content clearfix w">
      <div class="left fl">
        <p class="tit-p">答题卡</p>
        <div class="num">
          <ul class="clearfix">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </div>
      <div class="right fl">
        <h3>国际商务与国际营销</h3>
        <ul>
          <li class="test-paper" id="ex1" data-question-num="1">
            <h5>
              <small>1</small>（单选题,10 分）
            </h5>
            <p></p>
            <p>1+8=？</p>
            <p></p>
            <ul class="answer">
              <li>
                <b>A、</b>
                <p>3</p>
              </li>
              <li>
                <b>B、</b>
                <p>9</p>
              </li>
              <li>
                <b>C、</b>
                <p>23</p>
              </li>
              <li>
                <b>D、</b>
                <p>32</p>
              </li>
            </ul>
            <div class="choice">
              <ul>
                <li>
                  <label>
                    <input type="radio" name="user_answer[64]" value="A" />A
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="user_answer[64]" value="B" />B
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="user_answer[64]" value="C" />C
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="user_answer[64]" value="D" />D
                  </label>
                </li>
              </ul>
              <div class="collection">
                <span class="like" style="display:none;" data-question_id="64" data-action="1">
                  <i class="icon iconlike"></i>
                  <small>收藏题目</small>
                </span>
              </div>
            </div>
            <div class="lu-ms-tim">
              <em>
                正确答案
                <strong>B</strong>
              </em>
            </div>
            <div class="fz">
              <b>解析：</b>
              <p>小学老师教的8</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.textpaper {
  .w {
    width: 1200px;
    margin: 0 auto;
  }

  .title {
    width: 100%;
    height: 72px;
    line-height: 72px;
    background-color: #0169cc;
    color: #fff;
    font-size: 28px;
    letter-spacing: 2px;
    .fr {
      font-size: 16px;
      .spn1 {
        margin-right: 45px;
      }
    }
  }
  .content {
    .left {
      width: 16.7%;
      .tit-p {
        color: #656565;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        background: #eee;
      }
      .num {
        ul {
          li {
            background: #fff;
            color: #888;
            border: 1px solid #eee;
            width: 24.6%;
            height: 54px;
            line-height: 54px;
            text-align: center;
            float: left;
            cursor: pointer;
            margin: 20px 6px 10px 10px;
            border: 1px solid #eee;
          }
        }
      }
    }
    .right {
      border: 1px solid red;
      width: 83.3%;
      padding: 10px;
      box-sizing: border-box;
      h3 {
        height: 40px;
        font-size: 18px;
        color: #e82f24;
      }
      ul {
        .test-paper {
          border-top: 1px solid #eee;
          display: inline-block;
          width: 100%;
          h5 {
            font-size: 14px;
            color: #e82f24;
            line-height: 74px;
            small {
              display: inline-block;
              width: 24px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              background: #e82f24;
              color: #fff;
              border-radius: 50%;
            }
          }
          p {
            font-size: 16px;
            color: #656565;
            display: inline-block;
          }
          .answer {
            margin-left: 40px;
            li {
              color: #656565;
              font-size: 14px;
              margin-top: 25px;
            }
          }
          .choice {
            float: left;
            width: 100%;
            margin: 36px 0;
            font-size: 14px;
            color: #656565;
            ul {
              float: left;
              margin-left: 40px;
              li {
                float: left;
                margin-right: 50px;
                input {
                  margin: -3px 8px 0 0;
                }
              }
            }
          }
          .lu-ms-tim {
                float: left;
                width: 100%;
                color: #51cb96;
                // display: none;
                em{
                        float: left;
                    padding: 5px 50px;
                    font-size: 14px;
                    background: #f0fefa;
                    text-align: center;
                    line-height: 36px;
                }
            }
        }
      }
    }
  }
}
</style>
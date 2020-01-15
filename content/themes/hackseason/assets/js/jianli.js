// 个人简历 2018-11-26

//基本信息
var $baseRootEle = $('.txt');
$('#head').attr('src', jianli.base.head);
$baseRootEle.append('<h2 class="title">基本信息</h2>\
  <h4 class="item">' +jianli.base.name+ '&emsp;' +jianli.base.sex+ '&emsp;' +jianli.base.age+ '&emsp;' +jianli.base.major+ '</h4>\
  <h4 class="item">' +jianli.base.worktime+ '</h4>\
  <h4 class="item">' +jianli.base.brief+ '</h4>');

//联系方式
var $contactEle = $('.contact');
$contactEle.append('<h2 class="title">联系方式</h2>\
  <h4 class="item">电话：' +jianli.contact.phone+ '</h4>\
  <h4 class="item">邮箱：' +jianli.contact.mail+ '</h4>\
  <a href="' +jianli.contact.blog+ '" target="_black" class="item">博客：' +jianli.contact.blog+ '</a>');

// 教育经历
var $educationEl = $('.education');
$educationEl.find('.school').text(jianli.education.school + '(' +jianli.education.time+ ')')
$educationEl.find('.major').text(jianli.education.major)
var eduTmp = '';
jianli.education.des.forEach(function(item){
  eduTmp += '<li>' +item+ '</li>';
})
$educationEl.find('.item-list').append(eduTmp);
// 技能
var $skillEle = $('.skill-list');
jianli.skill.forEach(function(item){
  $skillEle.append('<div class="skill-item">\
  <h4 class="name">' +item.name+ '</h4>\
  <div class="value-box">\
      <div class="value" style="width: ' +item.value+ '%"></div>\
  </div>\
</div>')
})

// 工作经历
var $workExpEle = $('.work-exp');

jianli.workExp.forEach(function(item){
  var desTmp = '';
  item.des.forEach(function(desItem){
    desTmp += '<li>' +desItem+ '</li>';
  })
  $workExpEle.append('\
    <h4 class="sub-title">' +item.companyName+ '</h4>\
    <p class="sub-title-time">' +item.time+ ' | ' +item.job+ '</p>\
    <ul class="item-list">' +desTmp+ '</ul>')
})

// 其他
var $othersEle = $('.others .item-list');
var otherTmp = ''
jianli.others.forEach(function (item) {
  otherTmp += '<li>' +item+ '</li>';
})
$othersEle.append(otherTmp);
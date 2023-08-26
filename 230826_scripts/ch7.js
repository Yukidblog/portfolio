<span class="q_number">質問 1</span>
<h2 class="q_text">取得したい特定事業所加算のサービス種別を選択してください。</h2>
<li class="radio-field cf">
<span class="field-item">
[radio radio-01 class:button_02 use_label_element  "訪問介護" "重度訪問介護" "居宅介護" "行動援助" "同行援護"]</span></li>

[group group-h01]
<span class="q_number">質問 2</span>
<h2 class="q_text">サービス提供責任者は、全て介護福祉士または実務者研修修了者相当の方ですか？</h2>
<li class="radio-field cf">
<span class="field-item">
[radio radio-02 class:radio-p2 use_label_element "はい" "いいえ" "わからない"] </span></li>
[/group]


[group group-h02]
<span class="q_number">質問 3</span>
<h2 class="q_text">全従業者のうち、介護福祉士または実務者研修修了者相当の方は5割以上ですか？</h2>
<li class="radio-field cf">
<span class="field-item">
[radio radio-03 class:radio-p3 use_label_element  "はい" "いいえ" "わからない"] </span></li>
[/group]

[group group-h03]

[group group-01]
<span class="q_number">質問　4</span>
<h2 class="q_text">利用者総数のうち、要介護度4以上の利用者は2割以上ですか？</h2>[/group]
<li class="radio-field cf">
<span class="field-item">
[radio radio-04 class:radio-p4 use_label_element  "はい" "いいえ" "わからない"] </span></li>

[group group-02]
<span class="q_number">質問　4</span>
<h2 class="q_text">利用者総数のうち、支援区分5以上の利用者は3割以上ですか？</h2>[/group]


[group group-03]<tr>
<span class="q_number">質問　4</span>
<h2 class="q_text">利用者総数のうち、支援区分5以上の利用者は5割以上ですか？</h2>[/group]
[/group]



<h2>最後に、ユーザー情報の入力をお願いします。</h2>

<div id="cf-tbl">
<table>
<tbody>

<tr>
<th><span class="required">必須</span>氏名</th>
<td> [text* your-name] </td>
</tr>

</table>
</tbody>
</div>
[submit "上記の内容で送信する"]

<script>
document.addEventListener('wpcf7mailsent', function(event) {
    if (event.detail.status === 'mail_sent') { // CF7の送信が成功した場合に実行
        var radio02 = document.querySelector('input[name="radio-02"]:checked').value;
        var radio03 = document.querySelector('input[name="radio-03"]:checked').value;
        var radio04 = document.querySelector('input[name="radio-04"]:checked').value;

        if (radio02 === 'はい' && radio03 === 'はい' && radio04 === 'はい') {
            location.href = 'https://www.yahoo.co.jp/';
        } else if (radio02 === 'はい' && radio03 === 'はい' && (radio04 === 'いいえ' || radio04 === 'わからない')) {
            location.href = 'https://www.yahoo.co.th/'; // Yahoo! Thailand
        } else if (radio02 === 'はい' && (radio03 === 'いいえ' || radio03 === 'わからない') && radio04 === 'はい') {
            location.href = 'https://www.yahoo.co.uk/'; // Yahoo! UK
        } else if (radio02 === 'はい' && (radio03 === 'いいえ' || radio03 === 'わからない') && (radio04 === 'いいえ' || radio04 === 'わからない')) {
            location.href = 'https://www.yahoo.com/'; // Yahoo! US
        } else {
            location.href = 'https://www.google.com/';
        }
    }
});
</script>
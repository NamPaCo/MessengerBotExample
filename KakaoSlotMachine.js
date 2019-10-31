function randomItem(a) {
  return a[java.lang.Math.floor(java.lang.Math.random() * a.length)];
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (msg.substring(0, 5) == "slot!") {
        var SlotIconLeft = new Array("7️⃣","🍇","🍒","🍈","🍑");
        var SlotIconMiddle = new Array("7️⃣","🍇","🍒","🍈","🍑");
        var SlotIconRight = new Array("7️⃣","🍇","🍒","🍈","🍑");
        
        var playerSlot = new Array();
        
        var left = "";
        var middle = "";
        var right = "";
        var i = 1;
        while ( i < 4 ) {
            left = randomItem(SlotIconLeft)
            middle = randomItem(SlotIconMiddle)
            right = randomItem(SlotIconRight)
            playerSlot.push(left);
            playerSlot.push(middle);
            playerSlot.push(right);
            
            /* ====[ 중복 방지 ]====================================== */
            SlotIconLeft.splice(SlotIconLeft.indexOf(left), 1)
            SlotIconMiddle.splice(SlotIconMiddle.indexOf(middle), 1)
            SlotIconRight.splice(SlotIconRight.indexOf(right), 1)
            /* ====================================================== */
            
            i = i + 1;
        }
        var player =      playerSlot[0]+playerSlot[1]+playerSlot[2]+'\n';
        player = player + playerSlot[3]+playerSlot[4]+playerSlot[5]+'\n';
        player = player + playerSlot[6]+playerSlot[7]+playerSlot[8];
        var score=0;
        
        // 대각선 음의 방향
        if (playerSlot[0]==playerSlot[4] && playerSlot[4]==playerSlot[8]){
            score=score+1;
        }
        // 대각선 양의 방향
        if (playerSlot[2]==playerSlot[4] && playerSlot[4]==playerSlot[6]){
            score=score+1;
        }
        
        // 위에서 첫번째 줄
        if (playerSlot[0]==playerSlot[1] && playerSlot[1]==playerSlot[2]){
            score=score+1;
        }
        // 위에서 두번째 줄
        if (playerSlot[3]==playerSlot[4] && playerSlot[4]==playerSlot[5]){
            if (playerSlot[3]=="7️⃣") { 
                score = score + 100; // 777 뜨면 고득점.
            } else {
                score = score + 1;
            }
        }
        // 위에서 세번째 줄
        if (playerSlot[6]==playerSlot[7] && playerSlot[7]==playerSlot[8]){
            score=score+1;
        }
        
        replier.reply(player);
        replier.reply(score);
    }
}

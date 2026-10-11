// 빈출 유형 보강: 하루 P5 +4, P2 +3, P3/P4 +1 (총 20문항)
(function () {
  var M = (window.MOCK1 = window.MOCK1 || {});
  var q = function (a) { return { q: a[0], o: a[1], a: a[2], type: a[3], why: a[4], freq: true }; };
  var X = {
    1: {
      p5x: [
        ["Ms. Rivera's ------- to the project helped the team finish early.", ["contribute", "contribution", "contributive", "contributor"], 1, "빈출·명사 자리", "소유격 뒤, 전치사 to 앞 자리는 명사입니다. '기여'라는 뜻의 contribution이 맞습니다."],
        ["The company is known for its ------- customer service.", ["exceptional", "exceptionally", "exception", "exceptions"], 0, "빈출·형용사 자리", "명사 customer service를 꾸미는 형용사가 필요합니다."],
        ["Please ------- the attached file before the meeting.", ["reviews", "review", "reviewing", "reviewed"], 1, "빈출·동사 형태", "Please로 시작하는 명령문은 동사원형입니다."],
        ["Mr. Park is responsible for ------- new employees.", ["train", "trains", "training", "trained"], 2, "빈출·동명사", "전치사 for 뒤에는 동명사가 옵니다."],
      ],
      p2x: [
        ["What time does the store open?", ["Around nine o'clock.", "In the shopping mall.", "Yes, it's open."], 0, "빈출·What time", "시간을 묻는 질문에는 시각으로 답합니다."],
        ["Should I make a reservation for the dinner?", ["The dinner was great.", "It's probably not necessary.", "At seven thirty."], 1, "빈출·조동사 의문문", "예약이 필요한지 묻는 질문에 '필요 없을 것 같다'로 답했습니다."],
        ["Who left this umbrella here?", ["It's going to rain.", "Maybe it's Ms. Gomez's.", "No, thanks, I'll walk."], 1, "빈출·Who", "Who 질문에 사람 이름으로 답하는 B가 정답입니다."],
      ],
      lcx: ["What does the man say about the budget?", ["It is limited.", "It has been cut by half.", "It will increase next year.", "It was spent on advertising."], 0, "세부", "남자의 'our budget is tight'를 limited로 바꿔 말했습니다."],
    },
    2: {
      p5x: [
        ["The applicant ------- résumé was selected will be interviewed on Monday.", ["who", "whose", "whom", "which"], 1, "빈출·관계대명사", "뒤에 명사(résumé)가 오고 소유 관계이므로 whose입니다."],
        ["The report, ------- was completed last week, has been sent to the board.", ["who", "whose", "which", "what"], 2, "빈출·관계대명사", "사물 선행사 report를 받는 주격 관계대명사는 which입니다."],
        ["Ms. Kim introduced ------- to the new clients.", ["her", "hers", "herself", "she"], 2, "빈출·재귀대명사", "주어와 목적어가 같은 사람이므로 재귀대명사 herself입니다."],
        ["Anyone ------- wants to join the club should sign up at the front desk.", ["who", "whom", "whose", "which"], 0, "빈출·관계대명사", "사람 선행사 + 동사 wants가 이어지므로 주격 who입니다."],
      ],
      p2x: [
        ["How often do you check the inventory?", ["Every Monday morning.", "About fifty boxes.", "In the warehouse."], 0, "빈출·How often", "빈도를 묻는 질문에는 '매주 월요일'처럼 빈도로 답합니다."],
        ["Isn't the printer supposed to be fixed today?", ["Yes, the technician is coming this afternoon.", "I printed it yesterday.", "The paper is on the shelf."], 0, "빈출·부정의문문", "수리 일정을 확인해 주는 A가 정답입니다."],
        ["Could you cover my shift on Saturday?", ["The shift starts at six.", "Let me check my schedule.", "Yes, the cover is blue."], 1, "빈출·요청", "요청에 확인해 보겠다는 보류형 응답입니다."],
      ],
      lcx: ["How many times has the problem happened this week?", ["Once", "Twice", "Three times", "Every day"], 1, "세부", "'That's the second time this week'입니다."],
    },
    3: {
      p5x: [
        ["All packages must be ------- before 5 P.M.", ["deliver", "delivered", "delivering", "delivery"], 1, "빈출·수동태", "must be 뒤에 과거분사가 와서 수동태를 만듭니다."],
        ["The new product line ------- by a team of designers last year.", ["designed", "was designed", "has designing", "designs"], 1, "빈출·수동태", "제품이 '디자인된' 것이고 last year가 있으므로 was designed입니다."],
        ["Interested candidates are ------- to submit a portfolio.", ["asked", "asking", "ask", "asks"], 0, "빈출·수동태", "be asked to ~ 구조입니다."],
        ["The conference room is ------- for the meeting.", ["prepare", "preparing", "prepared", "preparation"], 2, "빈출·분사", "is prepared for(~을 위해 준비되어 있다)입니다."],
      ],
      p2x: [
        ["Where can I find the staff handbook?", ["It's on the company intranet.", "About fifty pages.", "Yes, I found it."], 0, "빈출·Where", "장소(위치)를 묻는 질문에 위치로 답합니다."],
        ["Why is the elevator out of service?", ["Because it's late.", "They're doing maintenance work.", "At the service desk."], 1, "빈출·Why", "이유를 묻는 질문에 원인(정비 작업)으로 답합니다."],
        ["Would you like some coffee or tea?", ["Coffee, please.", "Yes, I would.", "At the café."], 0, "빈출·선택의문문", "둘 중 하나를 골라 답하면 정답입니다."],
      ],
      lcx: ["When will boarding begin?", ["3:00 P.M.", "3:30 P.M.", "4:00 P.M.", "4:30 P.M."], 1, "세부", "'Boarding will now begin at 3:30 P.M.'입니다."],
    },
    4: {
      p5x: [
        ["The firm decided ------- its office in Busan.", ["open", "opening", "to open", "opened"], 2, "빈출·to부정사", "decide는 to부정사를 목적어로 취합니다."],
        ["We look forward to ------- you at the ceremony.", ["see", "seeing", "saw", "seen"], 1, "빈출·동명사", "look forward to의 to는 전치사이므로 동명사가 옵니다."],
        ["Employees are encouraged ------- public transportation.", ["use", "using", "to use", "used"], 2, "빈출·to부정사", "be encouraged to + 동사원형입니다."],
        ["Ms. Choi suggested ------- the meeting until next week.", ["postpone", "to postpone", "postponing", "postponed"], 2, "빈출·동명사", "suggest는 동명사를 목적어로 취합니다."],
      ],
      p2x: [
        ["When will the new schedule be announced?", ["Sometime next week.", "On the bulletin board.", "It's a tight schedule."], 0, "빈출·When", "시점을 묻는 질문에 시점으로 답합니다."],
        ["Do you want to take a break?", ["The break room is upstairs.", "I'd like to finish this section first.", "Not on Tuesday."], 1, "빈출·제안", "제안을 '먼저 끝내고 싶다'로 거절하는 우회적 응답입니다."],
        ["Who's in charge of the Singapore account?", ["About ten million dollars.", "At the Singapore office.", "Ms. Tan's team, I believe."], 2, "빈출·Who", "담당자를 묻는 질문에 팀/사람으로 답합니다."],
      ],
      lcx: ["What does the man ask the woman about first?", ["The power cable", "The order number", "The delivery date", "The warranty"], 0, "세부", "'Did you check the power cable?'입니다."],
    },
    5: {
      p5x: [
        ["This model is ------- than the previous one.", ["more efficient", "most efficient", "efficiently", "efficiency"], 0, "빈출·비교급", "than이 있으므로 비교급 more efficient입니다."],
        ["The Seoul branch has the ------- sales in the region.", ["high", "higher", "highest", "highly"], 2, "빈출·최상급", "the 뒤 명사 앞이므로 최상급 highest입니다."],
        ["Please arrive as ------- as possible.", ["early", "earlier", "earliest", "earlily"], 0, "빈출·원급 비교", "as ~ as 사이에는 원급을 씁니다."],
        ["The new office is much ------- than the old one.", ["spaciously", "more spacious", "most spacious", "spacious"], 1, "빈출·비교급", "much는 비교급을 강조하므로 more spacious입니다."],
      ],
      p2x: [
        ["How much does the monthly parking pass cost?", ["It's on the second level.", "Eighty dollars.", "Every month."], 1, "빈출·How much", "가격을 묻는 질문에는 금액으로 답합니다."],
        ["Have you seen the updated price list?", ["Not yet, could you forward it to me?", "Yes, the list is long.", "It costs ten dollars."], 0, "빈출·현재완료", "'아직 못 봤으니 보내 달라'는 자연스러운 응답입니다."],
        ["Why don't you take the afternoon off?", ["Because of the noon rush.", "An hour ago.", "Thanks, I think I will."], 2, "빈출·제안", "Why don't you~는 제안이고, 받아들이는 응답이 정답입니다."],
      ],
      lcx: ["According to the speaker, when will the Delta Supply shipment arrive now?", ["Monday", "Tuesday", "Wednesday", "Thursday"], 3, "세부", "'moved from Tuesday to Thursday'입니다."],
    },
    6: {
      p5x: [
        ["The ------- report contains several errors.", ["attach", "attached", "attaching", "attachment"], 1, "빈출·분사", "'첨부된 보고서'는 수동 의미의 과거분사 attached입니다."],
        ["Employees ------- in the workshop will receive a certificate.", ["participate", "participated", "participating", "participation"], 2, "빈출·분사", "Employees를 뒤에서 꾸미는 현재분사 participating(참가하는)입니다."],
        ["The ------- results encouraged the research team.", ["surprise", "surprising", "surprised", "surprisingly"], 1, "빈출·분사", "결과가 '놀라운'이라는 능동 의미이므로 surprising입니다."],
        ["We are pleased to announce the ------- of our new CEO.", ["appoint", "appointed", "appointment", "appointing"], 2, "빈출·명사 자리", "관사 the 뒤 전치사 of 앞은 명사 자리입니다."],
      ],
      p2x: [
        ["What did you think of the presentation?", ["It was very informative.", "In the conference room.", "At two o'clock."], 0, "빈출·What think", "평가를 묻는 질문에 평가로 답합니다."],
        ["Is Mr. Han coming to the dinner?", ["The dinner is at six.", "He's out of town this week.", "A table for four."], 1, "빈출·Be동사 의문문", "'못 온다'를 이유로 돌려 말한 간접 응답입니다."],
        ["Which route is faster, Highway 9 or Main Street?", ["I drove yesterday.", "It's a long street.", "Highway 9, usually."], 2, "빈출·선택의문문", "둘 중 하나를 골라 답합니다."],
      ],
      lcx: ["Where is the thermostat located?", ["In the lobby", "In the server room", "On the roof", "In the basement"], 1, "세부", "'It's in the server room at the end of the hall'입니다."],
    },
    7: {
      p5x: [
        ["Both the manager ------- the assistant attended the seminar.", ["or", "but", "and", "nor"], 2, "빈출·상관접속사", "Both A and B 구조입니다."],
        ["You may pay ------- by credit card or by bank transfer.", ["either", "neither", "both", "each"], 0, "빈출·상관접속사", "either A or B 구조입니다."],
        ["The proposal is not only creative ------- also affordable.", ["and", "but", "or", "so"], 1, "빈출·상관접속사", "not only A but also B 구조입니다."],
        ["------- the weather, the festival will be held as planned.", ["Regardless of", "Even though", "In case", "Instead"], 0, "빈출·전치사구", "뒤에 명사구가 오므로 전치사구 Regardless of(~에 관계없이)입니다."],
      ],
      p2x: [
        ["Where did you put the sales report?", ["It's in the top drawer.", "Yes, it sold well.", "Last quarter's."], 0, "빈출·Where", "위치를 묻는 질문에 위치로 답합니다."],
        ["Do you need help with the boxes?", ["Ten boxes.", "That would be great, thanks.", "In the storage room."], 1, "빈출·도움 제안", "도움 제안을 수락하는 응답입니다."],
        ["Why was the meeting canceled?", ["At three o'clock.", "In the main hall.", "Ms. Yoon is out sick."], 2, "빈출·Why", "이유를 묻는 질문에 원인으로 답합니다."],
      ],
      lcx: ["What will the speaker give the employees afterward?", ["Bonuses", "Extra rest days", "Temporary staff", "A canceled count"], 1, "세부", "'I'll make sure you have extra rest days afterward'입니다."],
    },
    8: {
      p5x: [
        ["If the shipment ------- on time, we will start production on Monday.", ["arrives", "will arrive", "arrived", "arriving"], 0, "빈출·시간·조건절 시제", "조건절에서는 미래 의미도 현재시제를 씁니다."],
        ["Once the contract ------- signed, the project will begin.", ["is", "will be", "was", "being"], 0, "빈출·시간·조건절 시제", "once절도 현재시제로 미래를 나타냅니다."],
        ["We will call you as soon as the results ------- available.", ["become", "will become", "became", "becoming"], 0, "빈출·시간·조건절 시제", "as soon as절은 현재시제를 씁니다."],
        ["Unless you ------- otherwise, the meeting will start at ten.", ["notify", "notifies", "are notifying", "will notify"], 0, "빈출·시간·조건절 시제", "unless절은 현재시제이고 주어 you에 맞는 notify입니다."],
      ],
      p2x: [
        ["How long will the renovation take?", ["About three weeks.", "On the third floor.", "Every year."], 0, "빈출·How long", "기간을 묻는 질문에는 기간으로 답합니다."],
        ["Can you recommend a good caterer?", ["The party was fun.", "I'll send you a few names.", "It's catered."], 1, "빈출·요청", "추천 요청에 이름을 보내 주겠다고 답합니다."],
        ["You've already booked the flights, haven't you?", ["The flight is long.", "A window seat, please.", "Not yet — I'm waiting for approval."], 2, "빈출·부가의문문", "예약했는지 확인하는 질문에 '아직'이라고 답합니다."],
      ],
      lcx: ["When does the presentation start?", ["In ten minutes", "In twenty minutes", "In an hour", "Tomorrow morning"], 1, "세부", "'our presentation starts in twenty minutes'입니다."],
    },
    9: {
      p5x: [
        ["Items purchased online are ------- for return within 30 days.", ["eligible", "probable", "capable", "reliable"], 0, "빈출·어휘", "be eligible for(~의 자격이 있다)가 자주 나옵니다."],
        ["The manager is ------- for the budget review.", ["responsible", "responsive", "respectful", "respective"], 0, "빈출·어휘", "be responsible for(~을 책임지다)입니다."],
        ["The ------- of the lease is two years.", ["term", "tone", "tour", "turn"], 0, "빈출·어휘", "계약 '기간'은 term입니다."],
        ["Photography is strictly ------- inside the exhibition hall.", ["prohibited", "prohibition", "prohibit", "prohibiting"], 0, "빈출·수동태", "be동사 + strictly + 과거분사입니다."],
      ],
      p2x: [
        ["Who should I send the invoice to?", ["In an envelope.", "The accounting department.", "It was expensive."], 1, "빈출·Who", "수신 부서를 알려 주는 B가 정답입니다."],
        ["Would you mind turning down the music?", ["At the concert.", "I like jazz.", "Sorry, I didn't realize it was loud."], 2, "빈출·Would you mind", "사과하며 수락하는 응답입니다."],
        ["What's the deadline for the proposal?", ["Next Friday at noon.", "About twenty pages.", "In my office."], 0, "빈출·What", "마감 시점을 묻는 질문에 시점으로 답합니다."],
      ],
      lcx: ["Why was the seminar moved?", ["A projector broke.", "More people signed up.", "A speaker was late.", "The room was closed."], 1, "이유", "'because more people signed up'입니다."],
    },
    10: {
      p5x: [
        ["The seminar will be held ------- the hotel's main ballroom.", ["in", "on", "by", "to"], 0, "빈출·전치사", "큰 공간 안에서 열리므로 in입니다."],
        ["Mr. Lee has been working here ------- 2018.", ["for", "since", "during", "from"], 1, "빈출·전치사", "현재완료진행과 함께 시작 시점(2018)에는 since를 씁니다."],
        ["All requests must be ------- in writing.", ["made", "making", "make", "makes"], 0, "빈출·수동태", "must be 뒤 과거분사 made입니다."],
        ["We are ------- to announce the opening of a new branch.", ["please", "pleased", "pleasing", "pleasure"], 1, "빈출·분사형 형용사", "be pleased to ~(~하게 되어 기쁘다)입니다."],
      ],
      p2x: [
        ["How can I get to the airport from here?", ["Yes, it's near here.", "There's a shuttle every thirty minutes.", "I'll fly tomorrow."], 1, "빈출·How", "방법을 묻는 질문에 이동 수단으로 답합니다."],
        ["Do you have the latest sales figures?", ["Last year.", "The figures are high.", "I'll pull them up now."], 2, "빈출·Do you have", "바로 찾아 주겠다는 수락 응답입니다."],
        ["Why haven't you replied to the e-mail?", ["I've been out of the office.", "By express mail.", "It's a long reply."], 0, "빈출·Why", "이유로 답한 A가 정답입니다."],
      ],
      lcx: ["How soon can the print shop usually deliver?", ["Within an hour", "Within a day", "Within a week", "By the end of the month"], 1, "세부", "'usually deliver within a day'입니다."],
    },
  };
  (M.plan || []).forEach(function (d) {
    var x = X[d.day];
    if (!x) return;
    d.p5x = x.p5x.map(function (a, i) {
      var it = q(a);
      var sh = (d.day + i) % 4; // 정답 위치가 한쪽으로 쏠리지 않도록 보기를 회전
      if (sh) { var ans = it.o[it.a]; it.o = it.o.slice(sh).concat(it.o.slice(0, sh)); it.a = it.o.indexOf(ans); }
      return it;
    });
    d.p2x = x.p2x.map(function (a) { return q(a); });
    d.lcx = q(x.lcx);
  });
})();

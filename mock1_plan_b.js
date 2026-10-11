// 1회 모의고사 오답 기반 맞춤 연습 (Day 6~10)
(function () {
  var M = (window.MOCK1 = window.MOCK1 || {});
  M.plan = M.plan || [];
  var q5 = function (a) { return { q: a[0], o: a[1], a: a[2], type: a[3], why: a[4] }; };
  var qs = function (arr) { return arr.map(q5); };
  var D = function (day, title, focus, c) {
    M.plan.push({
      day: day, title: title, focus: focus,
      p5: qs(c.p5),
      p6: { t: c.p6.t, qs: qs(c.p6.qs) },
      p7: { title: c.p7.title, t: c.p7.t, qs: qs(c.p7.qs) },
      p2: qs(c.p2),
      lc: { title: c.lc.title, type: c.lc.type, visual: c.lc.visual || null, lines: c.lc.lines.map(function (l) { return { v: l[0], t: l[1] }; }), qs: qs(c.lc.qs) },
    });
  };

  D(6, "시제 · 동사 형태", "G140·G146 시제/동사형태 보완 / P3 신분·직업 / P7 추론", {
    p5: [
      ["By the time the auditors arrive, the team ------- all the reports.", ["finishes", "will have finished", "has finishing", "finishing"], 1, "시제", "'~할 때쯤이면 이미 끝냈을 것'은 미래완료입니다."],
      ["The new policy ------- into effect on January 1.", ["will take", "taking", "to take", "have taken"], 0, "시제", "주어가 단수 policy이고 미래 시점이므로 will take입니다."],
      ["Ms. Han asked that the report ------- submitted before noon.", ["is", "was", "be", "being"], 2, "동사 형태", "요구·제안 동사(ask) 뒤 that절은 동사원형(be)을 씁니다."],
      ["All visitors are required ------- in at the front desk.", ["sign", "signing", "to sign", "signs"], 2, "동사 형태", "be required to + 동사원형 구조입니다."],
    ],
    p6: {
      t: "NOTICE\nThe annual company picnic (1)------- on Saturday, June 14, at Lakeside Park. Employees who wish to attend (2)------- by June 6 using the online form.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["held", "will be held", "is holding", "has held"], 1, "시제·태", "picnic은 '개최되는' 대상이므로 수동태이고, 6월 14일은 미래이므로 will be held입니다."],
        ["(2) 빈칸에 알맞은 것은?", ["to register", "should register", "registering", "registers"], 1, "동사 형태", "주어 Employees 뒤 본동사가 필요하고, 안내문이므로 should register가 자연스럽습니다."],
      ],
    },
    p7: {
      title: "이메일", t: "Dear Customer,\nWe have received your return of the blender (order #4471). Refunds are normally processed within five business days. However, because of the holiday, it may take up to ten days for the amount to appear in your account. We appreciate your patience.\nCustomer Care Team",
      qs: [
        ["고객에 대해 알 수 있는 것은?", ["The customer ordered a blender.", "The refund has already been issued.", "The company will close permanently.", "The customer was charged twice."], 0, "추론", "blender를 반품했으므로 주문했다는 사실을 알 수 있습니다."],
        ["환불은 최대 얼마나 걸릴 수 있나요?", ["Two days", "Five days", "Up to ten days", "Thirty days"], 2, "세부", "'may take up to ten days'입니다."],
      ],
    },
    p2: [
      ["I thought the deadline was next week.", ["It was a long week.", "Yes, I sent it already.", "It was moved up to Friday."], 2, "평서문", "'다음 주인 줄 알았다'는 말에 일정이 당겨졌다고 정정하는 응답입니다."],
      ["Do you mind if I open the window?", ["Not at all, it's warm in here.", "The window is open.", "A new window frame."], 0, "Do you mind", "Do you mind에 대한 승낙은 'Not at all'입니다."],
    ],
    lc: {
      title: "점검 기사 방문", type: "P3 신분·직업",
      lines: [["m", "Good morning. I'm here to check the air conditioning units on this floor. Where is the thermostat?"], ["f", "It's in the server room at the end of the hall. I'll take you there. Are you with Cooling Tech?"], ["m", "Yes, I'm the technician they sent. The work should take about an hour."]],
      qs: [
        ["Who most likely is the man?", ["A technician", "A security guard", "A delivery driver", "A receptionist"], 0, "신분·직업", "'I'm the technician they sent'로 직접 밝힙니다."],
        ["How long will the work take?", ["30 minutes", "An hour", "Two hours", "All day"], 1, "세부", "마지막 대사 'about an hour'입니다."],
      ],
    },
  });

  D(7, "한정사 · 전치사 혼합", "G101·G110 복습 / P4 의도파악 / P7 NOT", {
    p5: [
      ["------- of the new hires has completed the safety course yet.", ["Few", "None", "Several", "Many"], 1, "한정사", "동사가 단수(has)입니다. None of ~은 단수 동사를 받을 수 있고 Few·Several·Many는 복수 동사를 받습니다."],
      ["The proposal was approved ------- a few minor changes.", ["with", "in", "over", "upon"], 0, "전치사", "'약간의 수정을 조건으로/포함하여'는 with입니다."],
      ["Please direct all questions ------- the personnel department.", ["at", "to", "on", "of"], 1, "전치사", "direct A to B(A를 B에게 보내다)입니다."],
      ["------- the two proposals, the second is more cost-effective.", ["Between", "Among", "Within", "Beside"], 0, "전치사", "둘 사이의 비교는 Between입니다."],
    ],
    p6: {
      t: "Starting Monday, (1)------- employee entering the laboratory must wear protective glasses. This rule applies (2)------- visitors as well.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["All", "Every", "Many", "Both"], 1, "한정사", "뒤 employee가 단수입니다. Every만 단수 명사 앞에 쓸 수 있습니다."],
        ["(2) 빈칸에 알맞은 것은?", ["by", "to", "at", "of"], 1, "전치사", "apply to(~에 적용되다)입니다."],
      ],
    },
    p7: {
      title: "호텔 안내", t: "Greenfield Hotel Spa Offers\nGuests staying two nights or more receive:\n• Complimentary breakfast\n• Free airport shuttle\n• 20% off spa treatments\nLate checkout is available for an additional $15. All offers are valid through August.",
      qs: [
        ["2박 이상 투숙객에게 제공되지 않는 것은?", ["Breakfast", "Airport shuttle", "Free late checkout", "A spa discount"], 2, "NOT", "늦은 체크아웃은 추가 요금이 있으므로 무료 혜택이 아닙니다."],
        ["혜택은 언제까지 유효한가요?", ["May", "June", "July", "August"], 3, "세부", "마지막 문장 'valid through August'입니다."],
      ],
    },
    p2: [
      ["Which printer should I use for the color copies?", ["The one next to the copy room.", "Yes, they're in color.", "I prefer the black one."], 0, "Which", "Which 질문에는 구체적으로 지정하는 응답이 정답입니다."],
      ["Haven't you finished the budget yet?", ["The budget meeting is at three.", "I'm waiting for the sales numbers.", "No, I haven't seen it."], 1, "후반부 간접응답", "아직 못 끝낸 이유를 말하는 간접 응답입니다."],
    ],
    lc: {
      title: "재고 조사 공지", type: "P4 의도파악",
      lines: [["m", "Hello, everyone. Next week we'll begin the annual inventory count at the warehouse. I know many of you have asked for vacation days that week. Unfortunately, that's the busiest time of the year for us, so I can't approve any time off. I'll make sure you have extra rest days afterward."]],
      qs: [
        ["What is the talk mainly about?", ["An inventory count", "A holiday party", "A new hire", "A safety inspection"], 0, "주제", "첫 두 문장에 inventory count가 나옵니다."],
        ["Why does the speaker say, \"that's the busiest time of the year\"?", ["To suggest hiring more staff", "To explain why vacation requests cannot be approved", "To praise the team", "To announce a promotion"], 1, "의도파악", "인용 문장 바로 뒤 'so I can't approve any time off'가 이유를 밝힙니다."],
      ],
    },
  });

  D(8, "접속 · 문장삽입", "G115·G133·G134 복습 / P3 제안·제공 / P7 문장삽입", {
    p5: [
      ["------- the budget was limited, the team completed the project on time.", ["Although", "Despite", "Unless", "Moreover"], 0, "연결어", "뒤에 절이 오고 양보 의미이므로 Although입니다. Despite는 명사구가 옵니다."],
      ["The manager will not approve the request ------- all documents are submitted.", ["while", "unless", "whether", "since"], 1, "연결어", "'모든 서류가 제출되지 않는 한'은 unless입니다."],
      ["Customers can pay by credit card ------- in cash.", ["also", "either", "or", "nor"], 2, "연결어", "'카드 또는 현금'이므로 or입니다."],
      ["------- you have any trouble logging in, please contact the help desk.", ["Therefore", "Should", "Whether", "Unless"], 1, "도치 조건", "If가 생략된 도치 조건문 'Should you have ~'입니다."],
    ],
    p6: {
      t: "Dear Customers,\nOur downtown store will close for renovation from July 5 to July 20. (1)------- , our online store and the Eastside branch will stay open as usual. (2)-------",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["Meanwhile", "Otherwise", "Thus", "Instead of"], 0, "접속부사", "'그동안에'라는 의미로 Meanwhile이 자연스럽습니다."],
        ["(2) 빈칸에 들어갈 문장은?", ["Online orders will receive free shipping during this period.", "Our founder began the business in 1990.", "The renovation was designed by a famous architect.", "Employees must wear uniforms."], 0, "문장삽입", "온라인 스토어 이야기를 이어 고객에게 도움이 되는 혜택을 알리는 문장이 맞습니다."],
      ],
    },
    p7: {
      title: "기사", t: "The city council approved a plan to add bike lanes along Main Street. [1] Construction will begin in October and is expected to take three months. [2] Local business owners have expressed concern about reduced parking. [3] To address this, the city will build a new parking garage nearby. [4]",
      qs: [
        ["[1]~[4] 중 다음 문장이 들어갈 위치는? \"They fear that fewer customers will visit their shops.\"", ["[1]", "[2]", "[3]", "[4]"], 2, "문장삽입", "They는 business owners를 가리키므로 owners의 우려를 말한 문장 바로 뒤 [3]입니다."],
        ["시가 짓겠다고 한 것은?", ["A bike shop", "A parking garage", "A bus station", "A park"], 1, "세부", "마지막 문장 'build a new parking garage'입니다."],
      ],
    },
    p2: [
      ["When does the new branch open?", ["Next month, I believe.", "In the city center.", "Yes, it's new."], 0, "When", "시점을 묻는 질문에 시점으로 답했습니다."],
      ["Why don't we order lunch for the team?", ["At twelve thirty.", "Good idea — I'll get the menu.", "Because the team is busy."], 1, "제안", "Why don't we~는 제안이고, 수락하는 B가 정답입니다."],
    ],
    lc: {
      title: "프로젝터 고장", type: "P3 제안·요청",
      lines: [["f", "The conference room projector isn't working again, and our presentation starts in twenty minutes."], ["m", "Why don't you use the one in Room 204? It's free this morning."], ["f", "Good idea. Could you help me carry the laptop cart there?"], ["m", "Of course. I'll meet you downstairs."]],
      qs: [
        ["What does the man suggest?", ["Postponing the presentation", "Using a different room", "Calling the IT team", "Buying a new projector"], 1, "제안", "'Why don't you use the one in Room 204?'입니다."],
        ["What does the woman ask the man to do?", ["Carry some equipment", "Book a room", "Print handouts", "Send an e-mail"], 0, "요청", "'Could you help me carry the laptop cart'를 carry some equipment로 바꿨습니다."],
      ],
    },
  });

  D(9, "어휘 · 시각정보 · 이중지문", "어휘 복습 / P3 시각정보 / P7 이중지문 연계", {
    p5: [
      ["The ------- of the new building has been delayed due to heavy rain.", ["construction", "constructive", "constructed", "constructs"], 0, "품사(명사)", "관사 The 뒤 주어 자리이므로 명사가 필요합니다."],
      ["Employees should ------- their supervisors of any schedule changes.", ["say", "inform", "notice", "speak"], 1, "어휘(동사)", "inform A of B 구조입니다."],
      ["The hotel offers a ------- selection of local dishes.", ["tall", "high", "wide", "long"], 2, "어휘(형용사)", "a wide selection(다양한 선택지)이 자주 쓰이는 표현입니다."],
      ["Applicants must ------- a valid ID when they arrive for the exam.", ["attend", "require", "present", "reach"], 2, "어휘(동사)", "신분증을 '제시하다'는 present입니다."],
    ],
    p6: {
      t: "Thank you for your recent purchase. We value your opinion and would like to hear about your experience. Please complete the short survey and (1)------- your thoughts with us. It takes (2)------- five minutes.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["share", "claim", "lose", "expect"], 0, "어휘(동사)", "share A with B(A를 B와 공유하다)입니다."],
        ["(2) 빈칸에 알맞은 것은?", ["approximate", "approximately", "approximation", "approximated"], 1, "품사(부사)", "숫자 five minutes 앞에서 수식하는 부사 approximately입니다."],
      ],
    },
    p7: {
      title: "광고 + 이메일 (이중지문)", t: "[Text 1 · 광고]\nLakeview Rentals\nConference Room A seats 20 — $100 per hour.\nConference Room B seats 40 — $180 per hour.\nBoth rooms include a projector. Catering is available for an extra $12 per person.\n\n[Text 2 · 이메일]\nTo: Rita Moon / From: Sam Lee\nRita, I booked a room for our workshop on Friday from 1 to 3 P.M. We expect 35 participants. I also added catering for everyone.",
      qs: [
        ["Sam이 예약했을 방은?", ["Room A", "Room B", "Both rooms", "Neither room"], 1, "연계", "참가자가 35명이므로 20석 Room A는 불가능하고 40석 Room B입니다."],
        ["Sam이 내야 할 금액은?", ["$360", "$420", "$780", "$1,200"], 2, "연계", "Room B 2시간 $360 + 케이터링 35명 × $12 = $420 → $780입니다."],
      ],
    },
    p2: [
      ["Is the cafeteria open on weekends?", ["Only until noon.", "The coffee is great.", "Yes, I do."], 0, "Be동사 의문문", "조건부 긍정으로 답한 A가 정답입니다."],
      ["Do you know who's covering the night shift?", ["The shift is eight hours.", "Check the posted schedule.", "At night."], 1, "후반부 간접응답", "확인 방법을 알려 주는 간접 응답입니다."],
    ],
    lc: {
      title: "세미나 장소 변경 (시각정보)", type: "P3 시각정보",
      visual: { title: "Seminar Schedule", head: ["Room", "Seminar", "Start"], rows: [["101", "Marketing", "9:00"], ["102", "Finance", "10:00"], ["103", "Design", "11:00"]] },
      lines: [["f", "Hi, I'm trying to find the seminar on digital advertising."], ["m", "That's the marketing seminar. It was in the room listed on the schedule, but it swapped places with the design seminar because more people signed up."], ["f", "I see. So I should go to the other room?"], ["m", "Right. And it still starts at the original time."]],
      qs: [
        ["Look at the graphic. Which room should the woman go to?", ["Room 101", "Room 102", "Room 103", "Room 104"], 2, "시각정보", "Marketing은 표에서 101이고 Design과 자리를 바꿨으므로 103입니다."],
        ["What time will the woman's seminar start?", ["9:00", "10:00", "11:00", "12:00"], 0, "시각정보", "시작 시각은 그대로 원래 시각, 표에서 Marketing은 9:00입니다."],
      ],
    },
  });

  D(10, "종합 복습", "오답 유형 전체 확인 / P3 다음 행동 / P7 의도파악", {
    p5: [
      ["The committee reviewed ------- proposals submitted this year.", ["each", "every", "all", "another"], 2, "한정사", "proposals가 복수이므로 all이 맞습니다. each·every·another는 단수 명사 앞입니다."],
      ["The shop is open ------- 9 A.M. and 8 P.M. every day.", ["from", "among", "between", "until"], 2, "전치사", "between A and B 구조입니다."],
      ["The trainees were ------- impressed by the new equipment.", ["high", "highly", "height", "higher"], 1, "품사(부사)", "과거분사 impressed 앞 부사 highly입니다."],
      ["Mr. Kim ------- the contract yesterday, but he hasn't received a reply.", ["sends", "sent", "will send", "has sent"], 1, "시제", "yesterday가 있으므로 과거시제 sent입니다."],
    ],
    p6: {
      t: "Thank you for attending the workshop. (1)------- , please complete the evaluation form. (2)------- Your comments will help us plan future events.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["Nevertheless", "Finally", "Otherwise", "Besides"], 1, "접속부사", "감사 인사 뒤 마지막 요청이므로 Finally가 자연스럽습니다."],
        ["(2) 빈칸에 들어갈 문장은?", ["The form is available on our Web site until Friday.", "Parking is free for all guests.", "The workshop was held in Chicago last year.", "We hired new instructors."], 0, "문장삽입", "평가 양식을 안내하는 문장이 앞뒤 흐름에 맞습니다."],
      ],
    },
    p7: {
      title: "문자 메시지", t: "Mina (2:10 P.M.): Are you coming to the budget meeting?\nTom (2:11 P.M.): I'm stuck in traffic on Route 9.\nMina (2:12 P.M.): The meeting started five minutes ago.\nTom (2:13 P.M.): Can you start without me? I'll be there in 15 minutes.\nMina (2:14 P.M.): Sure. I'll share my screen so you can follow along remotely.\nTom (2:15 P.M.): Great, I'll log in from my phone.",
      qs: [
        ["Tom이 늦는 이유는?", ["Another meeting", "Traffic", "Car trouble", "A wrong room"], 1, "세부", "'I'm stuck in traffic'입니다."],
        ["Mina가 하겠다고 한 것은?", ["Cancel the meeting", "Send the minutes", "Share her screen", "Call a taxi"], 2, "세부", "'I'll share my screen'입니다."],
      ],
    },
    p2: [
      ["Could you send me the revised contract?", ["A three-year term.", "I've just e-mailed it to you.", "It was revised twice."], 1, "요청", "요청에 이미 처리했다고 답하는 자연스러운 응답입니다."],
      ["How about meeting at the café across the street?", ["Sounds good. See you there.", "The street is closed.", "Twice a week."], 0, "제안", "제안을 수락하는 A가 정답입니다."],
    ],
    lc: {
      title: "전시회 준비", type: "P3 문제점·다음 행동",
      lines: [["m", "Our booth is all set for the trade show, but we're out of brochures."], ["f", "I can contact the print shop. They can usually deliver within a day."], ["m", "Great. I'll check the shipping schedule for the display boards in the meantime."]],
      qs: [
        ["What is the problem?", ["Brochures are out of stock.", "The booth is too small.", "The boards were damaged.", "A hotel booking was lost."], 0, "문제점", "'we're out of brochures'를 바꿔 쓴 것입니다."],
        ["What will the man do next?", ["Visit a print shop", "Check a shipping schedule", "Book a flight", "Set up a booth"], 1, "다음 행동", "마지막 대사 'I'll check the shipping schedule'입니다."],
      ],
    },
  });
})();

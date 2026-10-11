// 1회 모의고사 오답 기반 맞춤 연습 (Day 1~5) · 문항은 모두 새로 작성한 유사 유형 문제
(function () {
  var M = (window.MOCK1 = window.MOCK1 || {});
  M.plan = M.plan || [];
  var q5 = function (a) { return { q: a[0], o: a[1], a: a[2], type: a[3], why: a[4] }; };
  var qs = function (arr) { return arr.map(q5); };
  var p2 = function (a) { return { q: a[0], o: a[1], a: a[2], type: a[3], why: a[4] }; };
  var D = function (day, title, focus, c) {
    M.plan.push({
      day: day, title: title, focus: focus,
      p5: qs(c.p5),
      p6: { t: c.p6.t, qs: qs(c.p6.qs) },
      p7: { title: c.p7.title, t: c.p7.t, qs: qs(c.p7.qs) },
      p2: c.p2.map(p2),
      lc: { title: c.lc.title, type: c.lc.type, visual: c.lc.visual || null, lines: c.lc.lines.map(function (l) { return { v: l[0], t: l[1] }; }), qs: qs(c.lc.qs) },
    });
  };

  D(1, "한정사 · 수 일치", "G101 한정사 오답 보완 / P2 Do you have…? / P3 제안", {
    p5: [
      ["------- employee who completes the training will receive a certificate.", ["All", "Each", "Many", "Several"], 1, "한정사", "뒤 명사 employee가 단수입니다. Each는 단수 명사 앞에 쓰고, All·Many·Several은 복수 명사 앞에 씁니다."],
      ["Please submit ------- expense reports to the finance office by Friday.", ["you", "your", "yours", "yourself"], 1, "소유격", "명사 앞 빈칸은 소유격 한정사입니다. your가 정답입니다."],
      ["------- applicants were invited to a second interview, but only two accepted.", ["Much", "Another", "Several", "Every"], 2, "한정사", "applicants는 복수형입니다. Much(불가산)·Another·Every(단수) 앞에는 쓸 수 없고 Several이 맞습니다."],
      ["The museum offers free admission on ------- first Sunday of the month.", ["the", "an", "those", "other"], 0, "관사", "서수(first) 앞에는 정관사 the를 씁니다."],
    ],
    p6: {
      t: "Dear Residents,\nThe building's water supply will be shut off on Saturday, March 8, from 9 A.M. to 1 P.M. The shutoff is necessary (1)------- the maintenance crew can replace an aging pipe in the basement. (2)------- We recommend that you store enough water for drinking and cooking in advance.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["so that", "even if", "as though", "rather than"], 0, "연결어", "'~할 수 있도록'이라는 목적의 so that이 자연스럽습니다."],
        ["(2) 빈칸에 들어갈 문장은?", ["The lobby has been repainted in a new color.", "Please note that restrooms on every floor will be unavailable during this time.", "Rent payments are due on the first day of each month.", "Our staff members are happy to help you move."], 1, "문장삽입", "단수 상황(단수 중 불편)을 설명하는 문장 뒤에 '미리 물을 받아 두라'는 안내가 이어지므로, 단수 영향을 알리는 문장이 맞습니다."],
      ],
    },
    p7: {
      title: "도서관 공지", t: "NOTICE — Riverside Community Library\nStarting April 1, the library will extend its weekday hours. The new hours are Monday through Friday, 8 A.M. to 9 P.M. Weekend hours remain 10 A.M. to 5 P.M. Members may reserve a study room online up to seven days in advance. Reservations are limited to two hours per day. A library card is required to enter the study rooms.",
      qs: [
        ["공지의 목적은?", ["To announce a change in operating hours", "To advertise a new membership plan", "To recruit volunteers", "To report a building closure"], 0, "목적", "첫 두 문장이 평일 운영시간 연장을 알립니다. 목적 문제는 첫 1~2문장에서 결정합니다."],
        ["스터디룸 이용에 필요한 것은?", ["A written application", "A library card", "A paid fee", "A staff escort"], 1, "세부(요건)", "마지막 문장에 library card가 required라고 나옵니다."],
      ],
    },
    p2: [
      ["Do you have a minute to review the schedule?", ["Yes, I reviewed it yesterday.", "Sure, let me finish this e-mail first.", "The schedule is on the wall."], 1, "Do you have…?", "요청에 대한 수락 응답입니다. A는 시제 함정(과거), C는 schedule 단어 반복 함정입니다."],
      ["Who's handling the client presentation next week?", ["In the main conference room.", "Yes, it's a big client.", "Let me check with Mr. Kim."], 2, "후반부 간접응답", "Who에 대해 이름을 바로 말하지 않고 '확인해 보겠다'로 답하는 간접 응답이 정답입니다."],
    ],
    lc: {
      title: "매출 하락 대책", type: "P3 제안·다음 행동",
      lines: [["m", "Hi Ana, did you see the sales report? Our numbers dropped last month."], ["f", "I did. I think our website is hard to use on phones. Maybe we should hire a designer to fix it."], ["m", "Good idea, but our budget is tight. How about asking the IT team first?"], ["f", "Okay. I'll send them an e-mail this afternoon."]],
      qs: [
        ["What does the woman suggest?", ["Lowering prices", "Hiring a designer", "Opening a new store", "Changing the report format"], 1, "제안", "Maybe we should hire a designer — 제안 표현 'we should'를 잡습니다."],
        ["What will the woman do this afternoon?", ["Meet a designer", "Update the report", "Send an e-mail", "Call a client"], 2, "다음 행동", "마지막 대사 'I'll send them an e-mail this afternoon'입니다."],
      ],
    },
  });

  D(2, "부사 자리 · 품사", "G108 부사 자리 보완 / P3 다음 행동 / P7 목적", {
    p5: [
      ["The new software allows employees to share files ------- across departments.", ["secure", "securely", "security", "secured"], 1, "품사(부사)", "동사 share를 꾸미는 부사 securely가 맞습니다."],
      ["Mr. Tanaka was ------- promoted to regional director after the merger.", ["quick", "quicker", "quickly", "quickness"], 2, "품사(부사)", "be동사와 과거분사 사이는 부사 자리입니다."],
      ["The ------- revised schedule will be posted on the Web site tomorrow.", ["recent", "recently", "recentness", "more recent"], 1, "품사(부사)", "과거분사 revised를 꾸미는 부사 recently가 맞습니다."],
      ["Sales have increased ------- since the new advertising campaign began.", ["considerable", "considerably", "consider", "considerate"], 1, "품사(부사)", "자동사 increased 뒤에서 수식하는 부사가 필요합니다."],
    ],
    p6: {
      t: "To: All Staff\nStarting next month, the east parking lot will be closed for resurfacing. During the work, employees are encouraged to use the south lot, which is (1)------- accessible from Pine Street. (2)------- , a shuttle bus will run every ten minutes between the south lot and the main entrance.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["convenient", "conveniently", "convenience", "conveniences"], 1, "품사(부사)", "형용사 accessible 앞에서 수식하는 부사가 필요합니다."],
        ["(2) 빈칸에 알맞은 것은?", ["Otherwise", "In addition", "Nevertheless", "As a result"], 1, "접속부사", "앞 문장에 정보를 더하는 흐름이므로 In addition이 맞습니다."],
      ],
    },
    p7: {
      title: "이메일", t: "To: Hana Park\nFrom: Daniel Cho\nSubject: Vendor contract\n\nDear Ms. Park,\nI am writing to ask whether you could join the contract review meeting with Brightline Catering on Thursday at 2 P.M. Since you negotiated last year's agreement, your input would be very helpful, especially regarding the delivery terms. If you cannot attend, please send me your notes by Wednesday.\nThank you.",
      qs: [
        ["Why did Mr. Cho write the e-mail?", ["To cancel a meeting", "To request participation in a meeting", "To introduce a new vendor", "To complain about a delivery"], 1, "목적", "첫 문장 'ask whether you could join the meeting'이 핵심입니다."],
        ["Ms. Park에 대해 알 수 있는 것은?", ["She works for Brightline Catering.", "She negotiated a previous contract.", "She will be on leave Thursday.", "She is Mr. Cho's supervisor."], 1, "세부", "'you negotiated last year's agreement'를 그대로 바꿔 쓴 보기입니다."],
      ],
    },
    p2: [
      ["Where should I put the new brochures?", ["In the supply closet would be fine.", "Yes, they look great.", "About two hundred copies."], 0, "Where", "장소를 묻는 질문에 장소로 답한 A가 정답입니다."],
      ["Aren't you attending the training session this afternoon?", ["A new training manual.", "My manager asked me to cover the front desk.", "At three o'clock."], 1, "후반부 간접응답", "'참석 못 한다'를 직접 말하지 않고 이유로 답하는 패턴입니다."],
    ],
    lc: {
      title: "프린터 고장", type: "P3 문제점·다음 행동",
      lines: [["f", "Mr. Evans, the printer on the third floor is jammed again."], ["m", "That's the second time this week. I'll call the repair company right away."], ["f", "Thanks. In the meantime, should I send my documents to the second-floor printer?"], ["m", "Yes, please. I'll let you know once it's fixed."]],
      qs: [
        ["What problem is mentioned?", ["A printer is jammed.", "A document is missing.", "A meeting was canceled.", "A phone line is down."], 0, "문제점", "첫 대사 'the printer ... is jammed'입니다."],
        ["What will the man do next?", ["Order office supplies", "Contact a repair company", "Move to the second floor", "Print some documents"], 1, "다음 행동", "'I'll call the repair company right away'를 Contact로 바꿔 말했습니다."],
      ],
    },
  });

  D(3, "전치사", "G110·G139 전치사 보완 / P4 세부 / P7 세부(요건)", {
    p5: [
      ["The shipment will arrive ------- Friday at the latest.", ["by", "until", "during", "within"], 0, "전치사", "마감 시점(늦어도 ~까지)은 by입니다. until은 계속되는 상태에 씁니다."],
      ["Employees may use the gym ------- their lunch break.", ["while", "during", "for", "among"], 1, "전치사", "뒤에 명사구(their lunch break)가 오므로 전치사 during이 맞습니다. while은 접속사입니다."],
      ["Registration will remain open ------- September 30.", ["since", "until", "among", "within"], 1, "전치사", "상태가 계속되는 끝 시점은 until입니다."],
      ["Visitors must wear a badge ------- all times while inside the facility.", ["at", "on", "with", "to"], 0, "전치사", "'항상'은 at all times라는 고정 표현입니다."],
    ],
    p6: {
      t: "MEMO\nEffective June 1, all travel expenses must be submitted (1)------- ten business days of the trip. Late submissions will not be reimbursed. Please attach a scanned receipt to every claim. (2)------- , your request may be returned.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["within", "during", "among", "past"], 0, "전치사", "기한 안에(~이내에)는 within입니다."],
        ["(2) 빈칸에 알맞은 것은?", ["Otherwise", "Moreover", "Therefore", "For instance"], 0, "접속부사", "'영수증을 첨부하라. 그렇지 않으면 반려될 수 있다'는 흐름이므로 Otherwise입니다."],
      ],
    },
    p7: {
      title: "채용 공고", t: "Now Hiring: Warehouse Coordinator — Harbor Logistics\nResponsibilities: track incoming shipments, manage inventory records, and supervise a team of six.\nRequirements: two years of experience in logistics and the ability to lift 20 kilograms. A forklift certification is preferred but not required.\nSend your résumé to jobs@harborlogistics.example by May 15. Interviews will be held the week of May 20.",
      qs: [
        ["이 직책에 대해 알 수 있는 것은?", ["It requires a forklift certification.", "It includes supervising staff.", "It is based overseas.", "It is a part-time job."], 1, "세부", "Responsibilities에 'supervise a team of six'가 있습니다. 자격증은 필수가 아닙니다."],
        ["5월 15일까지 지원자가 해야 할 일은?", ["Take a test", "Send a résumé", "Visit the warehouse", "Call the manager"], 1, "세부", "'Send your résumé ... by May 15'입니다."],
      ],
    },
    p2: [
      ["Can I borrow your stapler?", ["I'm using it right now, but I'll be done soon.", "A staple remover, please.", "On the second shelf."], 0, "Can I…?", "빌려 달라는 요청에 '지금 쓰는 중이지만 곧 끝난다'는 우회적 수락입니다."],
      ["How was the client meeting?", ["At the main office.", "It lasted two hours.", "Better than I expected."], 2, "How was", "'어땠나'는 평가를 묻는 질문입니다. 시간(B)·장소(A)로 답하면 오답입니다."],
    ],
    lc: {
      title: "공항 안내방송", type: "P4 세부",
      lines: [["m", "Attention passengers on Flight 52 to Seoul. Due to heavy fog, your departure has been delayed by about one hour. Boarding will now begin at 3:30 P.M. at Gate 12. Passengers who wish to change their ticket may visit the service counter near Gate 10. We apologize for the inconvenience."]],
      qs: [
        ["Why was the flight delayed?", ["A mechanical problem", "The weather", "A late crew", "A security check"], 1, "이유", "Due to heavy fog — 안개를 weather로 바꿔 말했습니다."],
        ["What can passengers do at the service counter?", ["Change a ticket", "Buy food", "Check a bag", "Rent a car"], 0, "세부", "'wish to change their ticket may visit the service counter'입니다."],
      ],
    },
  });

  D(4, "접속부사 · 연결어", "G115·G133 연결어 보완 / P3 문제점 / P7 의도파악", {
    p5: [
      ["The outdoor tour was canceled ------- the severe weather.", ["because", "because of", "although", "so that"], 1, "연결어", "뒤에 명사구가 오므로 전치사구 because of가 맞습니다. because는 절을 이끕니다."],
      ["------- the sales team exceeded its target, every member received a bonus.", ["Because", "Despite", "However", "Due to"], 0, "연결어", "뒤에 절(주어+동사)이 오고 이유를 나타내므로 Because입니다."],
      ["Ms. Lee is highly qualified; -------, she has not applied for the position.", ["therefore", "however", "moreover", "otherwise"], 1, "접속부사", "앞뒤가 반대 내용(자격은 충분하지만 지원하지 않음)이므로 however입니다."],
      ["Please reply by Friday ------- we can finalize the guest list.", ["so that", "as if", "whereas", "in spite of"], 0, "연결어", "'~할 수 있도록'이라는 목적의 so that입니다."],
    ],
    p6: {
      t: "Dear Mr. Torres,\nThank you for contacting Green Leaf Furniture about your damaged table. We are sorry that it arrived in poor condition. (1)------- , we will send a replacement free of charge. (2)------- Please keep the damaged table until the courier collects it on Tuesday.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["Accordingly", "Meanwhile", "Instead", "Likewise"], 0, "접속부사", "사과 → 그에 따른 조치(교체)이므로 결과·조치를 잇는 Accordingly입니다."],
        ["(2) 빈칸에 들어갈 문장은?", ["The replacement should arrive within five business days.", "Our showroom is open daily from ten to six.", "Tables are available in three colors.", "Many customers prefer oak."], 0, "문장삽입", "교체품 발송 이야기를 이어서 도착 시점을 알리는 문장이 자연스럽습니다."],
      ],
    },
    p7: {
      title: "문자 메시지", t: "Jun (10:02 A.M.): Are you still at the venue?\nEun-ji (10:04 A.M.): Yes. The caterer hasn't arrived yet.\nJun (10:05 A.M.): It's already 10. They were supposed to be here at 9:30.\nEun-ji (10:06 A.M.): I called them twice. Nobody picks up.\nJun (10:07 A.M.): I'll try another company we've used before.\nEun-ji (10:08 A.M.): That would be a relief.",
      qs: [
        ["어떤 문제가 있나요?", ["The venue is double-booked.", "The caterer has not arrived.", "The guest list is incomplete.", "The speaker is late."], 1, "세부", "두 번째 메시지 'The caterer hasn't arrived yet'입니다."],
        ["10시 8분 'That would be a relief'의 의미는?", ["She is tired of waiting.", "She is glad Jun will find an alternative.", "She thinks the event is canceled.", "She wants to change the venue."], 1, "의도파악", "직전 Jun의 대안 제안에 대한 반응이므로 '안심된다'는 뜻입니다. 의도 문제는 바로 앞 대사를 봅니다."],
      ],
    },
    p2: [
      ["Why was the shipment delayed?", ["By express mail.", "There was a problem at customs.", "It's about three kilograms."], 1, "Why", "이유를 묻는 질문에 원인을 말한 B가 정답입니다."],
      ["Would you like to take the train or drive?", ["Driving would be faster.", "Yes, a ticket.", "The train station is closed."], 0, "선택의문문", "둘 중 하나를 고르면 정답입니다. C는 station 반복 함정입니다."],
    ],
    lc: {
      title: "고장 난 프로젝터", type: "P3 문제점·제안",
      lines: [["f", "Hi, I'm calling about the projector I ordered. It arrived this morning, but the lamp doesn't turn on."], ["m", "I'm sorry to hear that. Did you check the power cable?"], ["f", "Yes, and I tried another outlet too."], ["m", "Then it's probably defective. I can send a replacement tomorrow, or give you a refund."]],
      qs: [
        ["What is the problem?", ["The wrong item was delivered.", "The projector does not work.", "A payment was declined.", "A delivery was late."], 1, "문제점", "'the lamp doesn't turn on'을 does not work로 바꿨습니다."],
        ["What does the man offer?", ["A free repair visit", "A discount coupon", "A replacement or a refund", "An extended warranty"], 2, "제안·제공", "마지막 대사 'send a replacement ... or give you a refund'입니다."],
      ],
    },
  });

  D(5, "어휘 (동사·명사)", "G106·G132 어휘 보완 / P4 시각정보 / P7 세부", {
    p5: [
      ["The company plans to ------- its product line next spring.", ["expand", "respond", "appoint", "indicate"], 0, "어휘(동사)", "product line을 목적어로 취하는 동사는 expand(확장하다)입니다."],
      ["Mr. Brown was asked to ------- the new employees during orientation.", ["reach", "guide", "follow", "gain"], 1, "어휘(동사)", "신입 직원을 '안내하다'는 guide입니다."],
      ["Customers can find a ------- of discounts on our Web site.", ["rate", "range", "ratio", "region"], 1, "어휘(명사)", "'a range of ~(다양한)'는 자주 나오는 표현입니다."],
      ["The manager asked for an ------- of the repair costs before approving the project.", ["evidence", "error", "estimate", "entrance"], 2, "어휘(명사)", "비용 '견적'은 estimate입니다."],
    ],
    p6: {
      t: "Westfield Bank will (1)------- a new mobile app next month. The app allows customers to deposit checks and (2)------- bills without visiting a branch.",
      qs: [
        ["(1) 빈칸에 알맞은 것은?", ["launch", "borrow", "deserve", "afford"], 0, "어휘(동사)", "앱을 '출시하다'는 launch입니다."],
        ["(2) 빈칸에 알맞은 것은?", ["spend", "pay", "owe", "cost"], 1, "어휘(동사)", "bills(청구서)를 '납부하다'는 pay입니다."],
      ],
    },
    p7: {
      title: "광고", t: "Sunrise Fitness Center — Grand Opening Special!\nJoin before March 31 and get your first month free. Classes include yoga, spinning, and swimming lessons for children. Members also receive 10% off at the Sunrise Café. Open 5 A.M. to 11 P.M. daily.",
      qs: [
        ["3월 31일 전에 가입하면 받는 혜택은?", ["A free month", "A free towel", "A personal trainer", "A free class pass"], 0, "세부", "'first month free'를 A free month로 바꿨습니다."],
        ["센터에 대해 알 수 있는 것은?", ["It offers classes for children.", "It is closed on Sundays.", "It opened last year.", "It has two locations."], 0, "사실확인", "'swimming lessons for children'이 근거입니다. 매일 영업(daily)이라 B는 오답입니다."],
      ],
    },
    p2: [
      ["Is the cafeteria open on weekends?", ["Only until noon.", "The coffee is great.", "Yes, I do."], 0, "Be동사 의문문", "'주말에 연다'에 대해 '정오까지만'으로 조건부로 답했습니다."],
      ["Do you know who's covering the night shift?", ["The shift is eight hours.", "Check the posted schedule.", "At night."], 1, "후반부 간접응답", "모른다고 하지 않고 확인 방법을 알려 주는 간접 응답입니다."],
    ],
    lc: {
      title: "배송 일정 변경 (시각정보)", type: "P4 시각정보",
      visual: { title: "이번 주 배송 일정", head: ["Supplier", "Day", "Time"], rows: [["Apex Foods", "Monday", "9 A.M."], ["Delta Supply", "Tuesday", "11 A.M."], ["Orion Paper", "Wednesday", "2 P.M."]] },
      lines: [["f", "Welcome to the staff meeting. I'd like to go over this week's delivery schedule. As you can see, the shipment from Delta Supply has been moved from Tuesday to Thursday. Please make sure someone is available to receive it. Also, the Monday delivery will come an hour late, so plan accordingly."]],
      qs: [
        ["Look at the graphic. What time will the Apex Foods delivery arrive?", ["9 A.M.", "10 A.M.", "11 A.M.", "2 P.M."], 1, "시각정보", "표의 Apex Foods는 9 A.M.이고 담화에서 '한 시간 늦게'라고 했으므로 10 A.M.입니다."],
        ["What does the speaker ask listeners to do?", ["Sign a form", "Arrange for someone to receive a delivery", "Call a supplier", "Update the schedule"], 1, "요청", "'make sure someone is available to receive it'입니다."],
      ],
    },
  });
})();

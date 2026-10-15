// 저녁 P7 타이머 연습용 새 지문 풀 (모두 새로 작성한 문항). 매일 다른 지문이 배정됩니다.
(function () {
  var M = (window.MOCK1 = window.MOCK1 || {});
  var Q = function (q, o, a, type, why) { return { q: q, o: o, a: a, type: type, why: why }; };
  M.p7pool = [
    { id: "a01", title: "사내 메모", t: "MEMO\nTo: All Staff / From: Facilities Office / Re: Parking permits\nBeginning May 1, parking permits will be required for all vehicles in Lot B. Permits can be obtained at the Facilities Office, Room 105, between 9 A.M. and 4 P.M. The first permit is free; replacement permits cost $20. Vehicles without permits may be towed after May 15.",
      qs: [Q("메모의 목적은?", ["To announce a new parking requirement", "To request payment for repairs", "To introduce a new employee", "To change work hours"], 0, "목적", "첫 문장이 Lot B 주차 허가증이 필요해진다는 새 규정을 알립니다."),
           Q("허가증을 잃어버리면?", ["It is replaced for free", "A $20 fee is charged", "The vehicle is towed immediately", "The driver must use Lot A"], 1, "세부", "'replacement permits cost $20'입니다.")] },
    { id: "a02", title: "이메일 (배송 지연)", t: "Dear Mr. Ortiz,\nThank you for your order of 50 desk chairs (order #8821). Unfortunately, the manufacturer has informed us that the shipment will be delayed by one week because of a shortage of materials. The chairs should now arrive on June 12. If this delay causes a problem for you, please contact me directly and I will arrange a partial delivery of ten chairs from our local stock.\nSincerely,\nHannah Brooks, Customer Service",
      qs: [Q("배송이 지연된 이유는?", ["A shortage of materials", "A shipping error", "A payment problem", "A warehouse fire"], 0, "세부(이유)", "'because of a shortage of materials'입니다."),
           Q("Ms. Brooks가 제안한 것은?", ["A refund of the whole order", "A partial delivery from local stock", "A discount on the next order", "Free installation"], 1, "세부", "'partial delivery of ten chairs from our local stock'입니다.")] },
    { id: "a03", title: "광고 (요리 수업)", t: "Learn to Cook Like a Pro!\nSaturdays, 10 A.M. to 1 P.M. at Maple Culinary Studio. Each class covers a different cuisine, from Italian to Thai. Class size is limited to 12, so register early. Fee: $65 per class, with all ingredients included. Register at maplestudio.example by Thursday for the weekend session. Aprons and knives are provided.",
      qs: [Q("수강료에 포함된 것은?", ["Ingredients", "A cookbook", "A certificate", "Transportation"], 0, "세부", "'all ingredients included'입니다."),
           Q("수업에 대해 알 수 있는 것은?", ["They are held on weekdays.", "They have limited space.", "They focus on one cuisine.", "They are free for members."], 1, "추론·사실확인", "'limited to 12'를 limited space로 바꿨습니다.")] },
    { id: "a04", title: "기사 (공장 건설)", t: "Harmon Motors announced on Monday that it will open a new assembly plant in Greenville, creating about 800 jobs. Construction will begin next spring, and production is expected to start in two years. Mayor Linda Cho welcomed the news, saying it would strengthen the local economy. The company said that most of the new positions will be filled by local residents.",
      qs: [Q("기사의 주제는?", ["A plan to build a new plant", "A mayor's election", "A product recall", "A company merger"], 0, "주제", "첫 문장이 새 조립 공장 건설 계획을 알립니다."),
           Q("새 일자리에 대해 알 수 있는 것은?", ["Most will go to local residents.", "They will start next month.", "They require a college degree.", "They are temporary."], 0, "세부", "마지막 문장 'filled by local residents'입니다.")] },
    { id: "a05", title: "문자 메시지 (근무 교대)", t: "Dan (3:05 P.M.): Can you cover my shift tomorrow morning? I have a dentist appointment.\nEva (3:07 P.M.): I'd love to, but I'm opening the store at 8 for the inventory count.\nDan (3:08 P.M.): Oh, I forgot about that.\nEva (3:10 P.M.): Why don't you ask Mina? She's off tomorrow.\nDan (3:11 P.M.): Good idea. I'll text her now.",
      qs: [Q("Eva가 Dan의 근무를 대신할 수 없는 이유는?", ["She has an inventory count to do.", "She is going to the dentist.", "She is on vacation.", "She does not work mornings."], 0, "세부", "'I'm opening the store at 8 for the inventory count'입니다."),
           Q("3시 8분 'Oh, I forgot about that'의 의미는?", ["He realizes Eva is unavailable.", "He has already found a replacement.", "He wants to cancel his appointment.", "He forgot to count inventory."], 0, "의도파악", "that은 Eva가 말한 재고 조사 일정을 가리킵니다.")] },
    { id: "a06", title: "휴무 공지 (NOT)", t: "Office Closure Notice\nOur main office will be closed from December 24 to January 2 for the holidays. During this time, the customer hotline will operate from 10 A.M. to 2 P.M. on weekdays, and online orders will still be accepted but will ship on January 3. Emergency repairs may be requested by e-mail at any time.",
      qs: [Q("공지에서 언급되지 않은 것은?", ["Hotline hours", "Shipping of online orders", "Emergency e-mail requests", "A holiday bonus"], 3, "NOT", "보기 A·B·C는 모두 본문에 있고 휴가 보너스는 없습니다."),
           Q("온라인 주문은 언제 발송되나요?", ["December 24", "December 31", "January 2", "January 3"], 3, "세부", "'will ship on January 3'입니다.")] },
    { id: "a07", title: "식당 후기", t: "★★★★☆ Bella Trattoria\n\"The pasta was excellent and the service was quick, even on a busy Friday night. The only drawback was the noise level; we had to raise our voices to talk. Prices are reasonable, with most main dishes under $20. I would recommend making a reservation, as the wait for a table was nearly forty minutes.\" — Joon, posted March 3",
      qs: [Q("Joon이 아쉬워한 점은?", ["The noise level", "The prices", "The service", "The pasta"], 0, "세부", "'The only drawback was the noise level'입니다."),
           Q("Joon이 추천하는 것은?", ["Visiting on weekdays", "Ordering dessert", "Making a reservation", "Sitting outside"], 2, "세부", "'I would recommend making a reservation'입니다.")] },
    { id: "a08", title: "주문 확인서", t: "Thank you for your order!\nOrder #3392\nItem: Standing desk (Oak) — $340\nItem: Desk lamp — $45\nShipping: $0 (free for orders over $300)\nTotal: $385\nEstimated delivery: October 18–20\nAssembly service is available for an additional $50. Add it before your order ships.",
      qs: [Q("배송비가 무료인 이유는?", ["The order is over $300.", "The customer is a member.", "It is a holiday.", "The items are on sale."], 0, "세부(이유)", "'free for orders over $300'입니다."),
           Q("이 주문에 대해 맞는 것은?", ["It includes an assembly service.", "It will be delivered in October.", "It totals $340.", "It contains three items."], 1, "사실확인", "배송 예정일이 October 18–20입니다.")] },
    { id: "a09", title: "채용 공고", t: "Graphic Designer — BrightPath Media\nWe are looking for a creative designer to join our marketing team. The successful candidate will create layouts for print and online materials and work closely with writers. Applicants should have three years of experience and a strong portfolio. Familiarity with video editing is a plus. Please submit your portfolio link and résumé by June 30.",
      qs: [Q("지원 요건은?", ["Three years of experience", "A degree in marketing", "Video editing certification", "Writing skills"], 0, "세부(요건)", "'should have three years of experience'입니다."),
           Q("채용된 사람이 하게 될 일은?", ["Manage the budget", "Create layouts", "Train new staff", "Edit videos"], 1, "세부", "'create layouts for print and online materials'입니다. 영상 편집은 우대 사항일 뿐입니다.")] },
    { id: "a10", title: "이메일 (행사 등록)", t: "Dear Ms. Ahn,\nYour registration for the Asia Tech Forum (September 14–16) has been confirmed. As an early registrant, you received a 15% discount. Please note that badges must be picked up in person at the Hall A desk; a photo ID is required. Sessions fill up quickly, so we recommend selecting your sessions online before September 1.",
      qs: [Q("Ms. Ahn에 대해 알 수 있는 것은?", ["She registered early.", "She will present at the forum.", "She canceled her registration.", "She works at the venue."], 0, "추론", "'As an early registrant, you received a 15% discount'입니다."),
           Q("명찰을 받으려면 가져가야 하는 것은?", ["A business card", "A printed ticket", "A photo ID", "A payment receipt"], 2, "세부", "'a photo ID is required'입니다.")] },
    { id: "a11", title: "기사 (문장삽입)", t: "Riverside Café will begin offering delivery service next month. [1] Customers can place orders through the café's mobile app. [2] Deliveries will be available within three kilometers of the café. [3] The café hopes the service will attract customers who work in nearby offices. [4]",
      qs: [Q("[1]~[4] 중 다음 문장이 들어갈 위치는? \"The delivery fee will be $3 for each order.\"", ["[1]", "[2]", "[3]", "[4]"], 2, "문장삽입", "배송 가능 지역을 말한 문장 바로 뒤에 배송비를 말하는 것이 자연스럽습니다."),
           Q("고객은 어떻게 주문하나요?", ["By phone", "Through a mobile app", "At the front desk", "By e-mail"], 1, "세부", "'place orders through the café's mobile app'입니다.")] },
    { id: "a12", title: "이메일 + 일정표 (이중지문)", t: "[Text 1 · 이메일]\nHi Leo, I've reviewed the training schedule. Could you move the safety session to the afternoon? The morning is full for the whole production team because of a big delivery. Thanks, Mara\n\n[Text 2 · 일정표]\nTraining Day — Thursday\n9:00  Safety Session (Room A)\n11:00  Software Basics (Room B)\n1:30  Customer Service (Room A)\n3:00  Wrap-up (Room C)",
      qs: [Q("Mara가 Leo에게 요청한 것은?", ["Change the time of a session", "Cancel the training", "Reserve Room C", "Order lunch"], 0, "목적", "'Could you move the safety session to the afternoon?'입니다."),
           Q("Mara가 옮기고 싶어 하는 수업은 현재 몇 시인가요?", ["9:00", "11:00", "1:30", "3:00"], 0, "연계", "옮길 수업은 Safety Session이고 일정표에서 9:00입니다.")] },
    { id: "a13", title: "세입자 공지", t: "Notice to Tenants\nElevator maintenance will take place on Tuesday from 9 A.M. to 3 P.M. The elevators will not be available during this time. Tenants who need help carrying items may call the front desk to request assistance from our staff. We recommend moving large items before or after the maintenance period. Thank you for your cooperation.",
      qs: [Q("세입자에게 권장하는 것은?", ["Avoid moving large items during maintenance", "Use the stairs only after 3 P.M.", "Pay a service fee", "Move out by Tuesday"], 0, "세부", "'moving large items before or after the maintenance period'를 바꿔 말한 보기입니다."),
           Q("물건 운반 도움을 받으려면?", ["Hire movers", "Call the front desk", "E-mail the manager", "Ask a neighbor"], 1, "세부", "'may call the front desk'입니다.")] },
    { id: "a14", title: "문자 메시지 (트럭 고장)", t: "Ravi (11:20 A.M.): Our delivery truck just broke down on Route 5.\nHana (11:21 A.M.): How far are you from the client?\nRavi (11:22 A.M.): About ten kilometers. I called the garage, and they can send a tow truck within an hour.\nHana (11:23 A.M.): The client's event begins at 1. That's cutting it close.\nRavi (11:24 A.M.): I know. Could you ask Tim to bring the goods in his van?\nHana (11:25 A.M.): I'll call him right away.",
      qs: [Q("Ravi가 말한 문제는?", ["A truck has broken down.", "A client canceled.", "A road is closed.", "An order is missing."], 0, "세부", "첫 메시지 'delivery truck just broke down'입니다."),
           Q("11시 23분 'That's cutting it close'의 의미는?", ["The goods may arrive just in time or late.", "The event is too short.", "The distance is very short.", "The client will cancel."], 0, "의도파악", "행사가 1시이고 견인에 한 시간이 걸리므로 시간 여유가 거의 없다는 뜻입니다.")] },
    { id: "a15", title: "보도자료", t: "FOR IMMEDIATE RELEASE\nLakeside Hotel has named Janet Wu as its new general manager, effective August 1. Ms. Wu has twenty years of experience in the hospitality industry, most recently as director of operations at Harbor Resorts. She succeeds Peter Lane, who is retiring after fifteen years with the hotel. \"I am excited to lead such a talented team,\" Ms. Wu said.",
      qs: [Q("Peter Lane은 누구인가요?", ["The retiring general manager", "A director at Harbor Resorts", "A hotel guest", "A new employee"], 0, "세부", "'She succeeds Peter Lane, who is retiring'입니다."),
           Q("Ms. Wu에 대해 맞는 것은?", ["She will retire in August.", "She previously worked at Harbor Resorts.", "She has led the hotel for 15 years.", "She founded Harbor Resorts."], 1, "사실확인", "'most recently as director of operations at Harbor Resorts'입니다.")] },
    { id: "a16", title: "광고 + 이메일 (이중지문)", t: "[Text 1 · 광고]\nTechMart Fall Sale! October 10–15\nLaptops 20% off · Tablets 15% off\nFree case with any tablet. In-store only.\n\n[Text 2 · 이메일]\nHi Sora, I'm going to TechMart on Saturday, October 12. I plan to buy a tablet that costs $400 before the discount. Do you want me to pick up a laptop for you too? — Jisu",
      qs: [Q("Jisu가 태블릿에 지불할 금액은?", ["$320", "$340", "$360", "$400"], 1, "연계", "태블릿 15% 할인이므로 $400의 85%인 $340입니다."),
           Q("Jisu가 무료로 받게 되는 것은?", ["A laptop bag", "A tablet case", "A warranty", "A mouse"], 1, "연계", "광고의 'Free case with any tablet'입니다.")] },
  ];
  // 정답 위치가 한쪽으로 쏠리지 않도록 보기를 회전 (문장삽입 위치 보기는 제외)
  M.p7pool.forEach(function (x, xi) {
    x.qs.forEach(function (q, k) {
      if (q.type === "문장삽입") return;
      var sh = (xi + k * 2) % q.o.length;
      if (!sh) return;
      var ans = q.o[q.a];
      q.o = q.o.slice(sh).concat(q.o.slice(0, sh));
      q.a = q.o.indexOf(ans);
    });
  });
})();

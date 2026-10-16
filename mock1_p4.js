// 아침 LC 추가: Part 4 담화 (하루 1세트 × 3문항 · 새로 작성)
(function () {
  var M = (window.MOCK1 = window.MOCK1 || {});
  var Q = function (q, o, a, type, why) { return { q: q, o: o, a: a, type: type, why: why }; };
  var L = function (v, arr) { return arr.map(function (t) { return { v: v, t: t }; }); };
  M.p4 = {
    1: { title: "치과 예약 변경 (음성 메시지)", type: "P4 음성메시지", lines: L("f", ["Hello, Mr. Park. This is Rosa from Sunrise Dental Clinic.", "I'm calling about your appointment this Thursday at two o'clock.", "Unfortunately, Dr. Hale has to attend an emergency meeting, so we need to move your visit to Friday at the same time.", "If that doesn't work for you, please call us back at 555-0142 before noon tomorrow.", "Thank you, and we apologize for the inconvenience."]),
      qs: [Q("Why is the speaker calling?", ["To change an appointment", "To confirm a payment", "To advertise a service", "To request a document"], 0, "목적", "'we need to move your visit to Friday'가 핵심입니다."),
           Q("What is the original appointment day?", ["Wednesday", "Thursday", "Friday", "Saturday"], 1, "세부", "'this Thursday at two o'clock'입니다."),
           Q("What should Mr. Park do if the new time is not convenient?", ["Visit the clinic in person", "Send an e-mail", "Call back before noon tomorrow", "Ask Dr. Hale directly"], 2, "요청", "'please call us back ... before noon tomorrow'입니다.")] },
    2: { title: "마트 할인 안내방송", type: "P4 안내방송", lines: L("m", ["Attention, shoppers. Fresh Valley Market is having a special weekend sale.", "All fruits and vegetables are 20 percent off until Sunday at closing time.", "To receive the discount on bakery items as well, please show the coupon that came with today's flyer at the checkout counter.", "Also, our new self-checkout lanes are now open near the main entrance.", "Thank you for shopping with us."]),
      qs: [Q("What is the announcement mainly about?", ["A store renovation", "A weekend sale", "A new employee", "A product recall"], 1, "주제", "첫 두 문장이 주말 할인을 알립니다."),
           Q("What must customers do to get the bakery discount?", ["Join a membership", "Spend over $50", "Show a coupon", "Shop before noon"], 2, "세부", "'show the coupon ... at the checkout counter'입니다."),
           Q("Where are the new self-checkout lanes?", ["Near the main entrance", "In the bakery", "Beside the parking lot", "On the second floor"], 0, "세부", "'near the main entrance'입니다.")] },
    3: { title: "박물관 가이드", type: "P4 관광 안내", lines: L("f", ["Welcome to the City History Museum, everyone.", "My name is Julia, and I'll be your guide for the next hour.", "Before we begin, please remember that photography is not allowed in the Ancient Pottery Hall, though you're welcome to take pictures everywhere else.", "We'll start with the textile exhibit on the first floor.", "After the tour, you're invited to have free refreshments in the garden café."]),
      qs: [Q("Who most likely is the speaker?", ["A museum guide", "A café owner", "A security officer", "A ticket seller"], 0, "신분", "'I'll be your guide'입니다."),
           Q("What are the listeners told they cannot do?", ["Touch the displays", "Take photos in one hall", "Enter the garden", "Bring a bag"], 1, "세부", "Ancient Pottery Hall에서는 사진 촬영 금지입니다."),
           Q("What will listeners be offered after the tour?", ["A discount coupon", "A souvenir", "Free refreshments", "A printed map"], 2, "세부", "'invited to have free refreshments'입니다.")] },
    4: { title: "분기 실적 회의", type: "P4 회의 발췌", lines: L("m", ["Good morning, team. Let's go over the third-quarter results.", "I'm pleased to report that online sales rose by fifteen percent compared with the same period last year.", "However, customer returns have also increased, mainly because of packaging damage during delivery.", "So next month, we'll start working with a new packaging supplier.", "I'd like each department head to send me suggestions by Friday."]),
      qs: [Q("What is the main topic of the meeting?", ["Third-quarter results", "A new hire", "Office relocation", "A safety drill"], 0, "주제", "'go over the third-quarter results'입니다."),
           Q("What caused the increase in returns?", ["Late delivery", "Wrong sizes", "Packaging damage", "Poor reviews"], 2, "세부", "'mainly because of packaging damage'입니다."),
           Q("What will happen next month?", ["A price increase", "A new supplier will be used", "A store will close", "A survey will be sent"], 1, "다음 행동", "'we'll start working with a new packaging supplier'입니다.")] },
    5: { title: "셔틀버스 안내 (시각정보)", type: "P4 시각정보", visual: { title: "Shuttle Bus Schedule", head: ["Route", "Departs", "Destination"], rows: [["A", "8:00", "Main Office"], ["B", "8:30", "Factory"], ["C", "9:00", "Airport"]] },
      lines: L("f", ["Hello, employees. I'd like to make a quick announcement about the shuttle service.", "Starting tomorrow, the Route B bus will leave thirty minutes earlier because of road construction.", "All other routes will remain the same.", "Please check the notice board near the lobby for updates, and plan to arrive at the stop five minutes early."]),
      qs: [Q("Look at the graphic. What time will the Route B bus leave tomorrow?", ["8:00", "8:30", "9:00", "9:30"], 0, "시각정보", "표의 Route B는 8:30이고 30분 앞당겨지므로 8:00입니다."),
           Q("Why is the schedule changing?", ["A driver is absent", "Road construction", "A holiday", "Bad weather"], 1, "세부(이유)", "'because of road construction'입니다."),
           Q("Where can listeners find updates?", ["On the company Web site", "In an e-mail", "On a notice board", "At the cafeteria"], 2, "세부", "'check the notice board near the lobby'입니다.")] },
    6: { title: "수상 소감 (연설)", type: "P4 연설", lines: L("m", ["Thank you all for this wonderful award.", "When I joined Delta Logistics ten years ago, we had only twelve employees and one small warehouse.", "Today we serve customers in twenty countries, and that wouldn't have been possible without this amazing team.", "I'd especially like to thank our founder, Ms. Han, for believing in us.", "Now, please enjoy the rest of the evening."]),
      qs: [Q("What is the speaker doing?", ["Accepting an award", "Opening a store", "Announcing a merger", "Interviewing a candidate"], 0, "주제", "첫 문장 'Thank you all for this wonderful award'입니다."),
           Q("What does the speaker say about the company?", ["It was founded last year.", "It has grown over time.", "It will move abroad.", "It lost customers."], 1, "추론", "12명의 직원에서 20개국 고객으로 성장했다고 말합니다."),
           Q("Who does the speaker thank in particular?", ["A customer", "The founder", "A supplier", "The mayor"], 1, "세부", "'thank our founder, Ms. Han'입니다.")] },
    7: { title: "자동응답 안내", type: "P4 자동응답", lines: L("f", ["Thank you for calling Greenfield Furniture.", "Our showroom is open Monday through Saturday, from ten A.M. to seven P.M.", "We are closed on Sundays and national holidays.", "To check the status of your delivery, press one. To speak with a sales representative, press two.", "If you know your party's extension, you may dial it at any time."]),
      qs: [Q("What type of business is Greenfield Furniture?", ["A furniture store", "A moving company", "A hotel", "A bank"], 0, "신분·업종", "회사명과 showroom 언급으로 알 수 있습니다."),
           Q("When is the business closed?", ["Saturdays", "Mondays", "Sundays", "Weekday evenings"], 2, "세부", "'closed on Sundays and national holidays'입니다."),
           Q("What should callers do to check a delivery status?", ["Press one", "Press two", "Dial an extension", "Leave a message"], 0, "요청", "'To check the status of your delivery, press one'입니다.")] },
    8: { title: "신규 소프트웨어 교육", type: "P4 교육", lines: L("m", ["Welcome to today's training session on our new scheduling software.", "The program will replace the paper calendars we've used for years, so everyone will need to learn it.", "First, I'll show you how to create an appointment. Then you'll practice in pairs.", "If you have any trouble logging in, the IT department will help you after the session.", "Let's get started."]),
      qs: [Q("What is the purpose of the session?", ["To teach new software", "To discuss a budget", "To introduce a new manager", "To announce layoffs"], 0, "목적", "'training session on our new scheduling software'입니다."),
           Q("What will the software replace?", ["Paper calendars", "Phone systems", "Time cards", "E-mail"], 0, "세부", "'replace the paper calendars'입니다."),
           Q("What will participants do after the demonstration?", ["Take a test", "Practice in pairs", "Eat lunch", "Fill out a survey"], 1, "다음 행동", "'Then you'll practice in pairs'입니다.")] },
    9: { title: "지역 뉴스", type: "P4 뉴스", lines: L("f", ["In local news, the Riverside Library will reopen next Monday after a three-month renovation.", "The new building has a larger children's section, a quiet study area, and free wireless Internet.", "Mayor Oh will attend the opening ceremony at ten A.M.", "To celebrate, the library will offer free membership cards to everyone who visits on opening day."]),
      qs: [Q("What is the news report about?", ["A library reopening", "A new school", "A road closure", "A city election"], 0, "주제", "첫 문장이 도서관 재개관을 알립니다."),
           Q("What is NOT mentioned as a feature of the new building?", ["A children's section", "A study area", "A café", "Free wireless Internet"], 2, "NOT", "카페는 언급되지 않았습니다."),
           Q("What will visitors receive on opening day?", ["A free book", "A free membership card", "A discount coupon", "A tote bag"], 1, "세부", "'free membership cards to everyone who visits on opening day'입니다.")] },
    10: { title: "탑승구 변경 (시각정보)", type: "P4 시각정보", visual: { title: "Departures", head: ["Flight", "Gate", "Time"], rows: [["KE 201", "12", "3:10"], ["OZ 330", "15", "3:40"], ["JL 512", "18", "4:05"]] },
      lines: L("m", ["May I have your attention, please.", "Passengers on Flight OZ 330 should note that the departure gate has been changed because of a scheduling conflict.", "The flight will now depart from the gate right next to the one for the earliest flight on the board.", "Boarding will begin on time. We apologize for any inconvenience."]),
      qs: [Q("What is the announcement about?", ["A gate change", "A flight cancellation", "A lost bag", "A new airline"], 0, "주제", "'the departure gate has been changed'입니다."),
           Q("Look at the graphic. Which gate should passengers on Flight OZ 330 go to?", ["Gate 12", "Gate 13", "Gate 15", "Gate 18"], 1, "시각정보", "가장 이른 항공편(KE 201)의 탑승구는 12번이고 그 바로 옆 13번으로 바뀝니다."),
           Q("What does the speaker say about boarding?", ["It will start on time.", "It will be delayed.", "It will be earlier.", "It is finished."], 0, "세부", "'Boarding will begin on time'입니다.")] },
  };
  // 정답 위치가 쏠리지 않도록 보기 회전
  Object.keys(M.p4).forEach(function (d) {
    M.p4[d].qs.forEach(function (q, k) {
      if (q.type === "NOT" || q.o.length < 3) return;
      var sh = (Number(d) + k * 2) % q.o.length;
      if (!sh) return;
      var ans = q.o[q.a];
      q.o = q.o.slice(sh).concat(q.o.slice(0, sh));
      q.a = q.o.indexOf(ans);
    });
  });
})();

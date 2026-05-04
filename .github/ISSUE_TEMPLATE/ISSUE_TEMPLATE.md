---
name: default issue template 
about: 디폴트 템플릿입니다. 추후에는 feat, fix, chore등 기능별 이슈 템플릿을 로 저장해두어도 좋습니다.
title: '[Prefix] 제목 작성'
labels: feat
assignees: ''
---

## 🧩 Issue 요약
- 어떤 작업인지 한 줄로 설명
ex) 메인 페이지의 상품 리스트 카드 UI를 구현합니다.

---

## 🎯 작업 목적 (Why)
- 왜 이 작업이 필요한지
- 어떤 문제를 해결하는지

ex) 사용자가 등록된 상품을 한눈에 확인하고 상세 페이지로 진입하기 위함입니다.

---

## 🧱 작업 범위 (Scope)
- 어디까지 구현하는지 명확히 작성 (과도한 확장 방지)

ex)
- 상품 카드 Grid 레이아웃 (반응형 대응)
- 호버 시 이미지 확대 애니메이션 추가
- 무한 스크롤 라이브러리 연동 (Optional)

❌ 제외
- 상세 페이지 이동 로직 (다음 이슈에서 진행)

---

## 🛠️ 구현 상세 (How)

### 1. 디자인 참조
- **Figma Link**: [피그마 컴포넌트 링크 삽입]

### 2. Mock Data (연동 전 임시 데이터)
```json
{
  "id": 1,
  "title": "상품명",
  "price": 10000,
  "imageUrl": "[https://example.com/image.png](https://example.com/image.png)"
}

---

## 🔗 참고 자료 (Optional)
<!-- 참고 링크, 문서 -->

---

## ⚠️ 고려 사항 (Optional)
<!-- 주의할 점 -->
ex) 
- price는 0 이상
- name은 null 불가
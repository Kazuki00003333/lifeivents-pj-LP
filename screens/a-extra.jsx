/* eslint-disable */
// Variation A — Extra screens: AI event creation flow + External integrations
// Uses the same A palette/typography as variation-a.jsx
// (A is declared as a const there; we reference it via window or re-derive.
//  Simpler: re-declare a local A2 with the same values.)

const A2 = {
  bg: '#F6EFE4',
  surface: '#FFFCF7',
  surfaceAlt: '#EFE5D4',
  ink: '#2A201A',
  ink2: '#6F5F52',
  ink3: '#A89A8B',
  line: '#E6DAC5',
  accent: '#B5572E',
  accentSoft: '#E9C7AE',
  ev: {
    wedding: '#B5485C',
    funeral: '#6E5380',
    celebration: '#C28534',
    other: '#7E8C7B',
  },
  serif: '"Noto Serif JP", "Shippori Mincho", serif',
  sans:  '"Noto Sans JP", -apple-system, system-ui, sans-serif',
};

// Modal-style header for sub-screens
function SubHeader({ title, right }) {
  return (
    <div style={{
      padding: '8px 16px 12px', display: 'flex', alignItems: 'center',
      gap: 12, borderBottom: `1px solid ${A2.line}`, background: A2.surface,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 999,
        display: 'grid', placeItems: 'center', color: A2.ink2,
        fontFamily: A2.serif, fontSize: 20,
      }}>‹</div>
      <div style={{ flex: 1, fontFamily: A2.serif, fontSize: 17, fontWeight: 700 }}>{title}</div>
      {right}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 1) New Event form (with dropdown type + manual task list + AI FAB)
// ────────────────────────────────────────────────────────────────────
function NewEventA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: A2.bg, fontFamily: A2.sans,
      paddingTop: 56, overflow: 'auto', color: A2.ink, position: 'relative',
    }}>
      <SubHeader title="新しいイベント" right={
        <div style={{
          fontFamily: A2.sans, fontSize: 12, fontWeight: 700,
          color: A2.ink3, padding: '4px 10px',
        }}>下書き保存</div>
      } />

      <div style={{ padding: '14px 20px 120px' }}>
        {/* Name */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            イベント名 <span style={{ color: A2.accent }}>*</span>
          </div>
          <div style={{
            background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', fontFamily: A2.serif, fontSize: 16, fontWeight: 600, color: A2.ink,
          }}>長男・蓮の七五三</div>
        </div>

        {/* Type — DROPDOWN */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            種別 <span style={{ color: A2.accent }}>*</span>
          </div>
          <div style={{
            background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: `${A2.ev.celebration}20`, color: A2.ev.celebration,
              display: 'grid', placeItems: 'center', fontFamily: A2.serif, fontSize: 14, fontWeight: 700,
            }}>祝</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: A2.ev.celebration, fontWeight: 700, letterSpacing: 2 }}>お祝い</div>
              <div style={{ fontFamily: A2.serif, fontSize: 15, fontWeight: 700, marginTop: 1 }}>七五三</div>
            </div>
            <div style={{ color: A2.ink3, fontSize: 16 }}>▾</div>
          </div>
          <div style={{ fontSize: 11, color: A2.ink3, marginTop: 4 }}>
            お宮参り・誕生日・入学式など24種類のテーマから選べます
          </div>
        </div>

        {/* Who */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            誰のイベントか
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[['自分'], ['子供', true], ['家族'], ['友人']].map(([l, on], i) => (
              <div key={i} style={{
                padding: '7px 14px', borderRadius: 999,
                background: on ? A2.accent : A2.surfaceAlt,
                color: on ? '#fff' : A2.ink2,
                fontSize: 12, fontWeight: 700,
              }}>{l}</div>
            ))}
          </div>
          <div style={{
            marginTop: 8, padding: '10px 14px',
            background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 10,
            fontSize: 13, color: A2.ink, fontWeight: 600,
          }}>蓮</div>
        </div>

        {/* Date */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>日付</div>
          <div style={{
            background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ fontFamily: A2.serif, fontSize: 15, fontWeight: 600 }}>2026年 3月 15日（日）</div>
            <div style={{ color: A2.accent, fontSize: 14 }}>📅</div>
          </div>
        </div>

        {/* Budget */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            予算目標（任意）
          </div>
          <div style={{
            background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', fontFamily: A2.serif, fontSize: 16, fontWeight: 600,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>¥120,000</span>
            <span style={{ fontSize: 11, color: A2.ink3, fontWeight: 500 }}>120,000円</span>
          </div>
        </div>

        {/* Manual tasks section */}
        <div style={{
          marginTop: 22, padding: '14px 16px',
          background: A2.surface, border: `1px solid ${A2.line}`, borderRadius: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ fontFamily: A2.serif, fontSize: 14, fontWeight: 700 }}>
              タスクを手動で追加
              <span style={{ fontSize: 11, color: A2.ink3, marginLeft: 8, fontWeight: 500 }}>2件</span>
            </div>
            <div style={{
              fontSize: 10, color: A2.ink3, padding: '2px 8px',
              background: A2.surfaceAlt, borderRadius: 999, fontWeight: 700, letterSpacing: 1,
            }}>AI併用OK</div>
          </div>
          <div style={{ fontSize: 11, color: A2.ink3, marginBottom: 10, lineHeight: 1.5 }}>
            作成前にタスクと期日を登録できます。AIと併用も可能です。
          </div>

          {[
            { title: '撮影日に着る着物を決める', date: '2026/02/15' },
            { title: '親戚への日程連絡',         date: null },
          ].map((t, i) => (
            <div key={i} style={{
              background: A2.surfaceAlt, padding: '10px 12px', borderRadius: 10,
              border: `1px solid ${A2.line}`,
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: A2.ink }}>{t.title}</div>
                {t.date && (
                  <div style={{ fontSize: 10, color: A2.ink3, marginTop: 2 }}>期限 {t.date}</div>
                )}
              </div>
              <div style={{ color: A2.ink3, fontSize: 16 }}>🗑</div>
            </div>
          ))}

          <div style={{
            marginTop: 4, border: `1.5px dashed ${A2.accent}`,
            borderRadius: 10, padding: '10px 0', textAlign: 'center',
            color: A2.accent, fontSize: 13, fontWeight: 700,
          }}>＋ タスクを追加</div>
        </div>

        {/* AI auto toggle */}
        <div style={{
          marginTop: 14,
          background: A2.accent + '14',
          border: `1px solid ${A2.accent}40`,
          borderRadius: 14, padding: '13px 14px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6, background: A2.accent,
            color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800,
          }}>✓</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>AIで残りのタスクも自動作成</div>
            <div style={{ fontSize: 11, color: A2.ink2, marginTop: 2 }}>
              本番日から逆算して、抜け漏れがちなタスクも提案
            </div>
          </div>
        </div>

        {/* Create */}
        <div style={{
          marginTop: 18,
          background: A2.accent, color: '#fff', borderRadius: 14,
          padding: '14px 0', textAlign: 'center',
          fontFamily: A2.serif, fontSize: 16, fontWeight: 700,
          boxShadow: '0 4px 14px rgba(181,87,46,0.25)',
        }}>作成する</div>
      </div>

      {/* AI FAB */}
      <div style={{
        position: 'absolute', right: 18, bottom: 22,
        background: A2.surface, border: `2px solid ${A2.accent}`, color: A2.accent,
        padding: '10px 18px', borderRadius: 999,
        display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 24px rgba(181,87,46,0.25)',
        fontFamily: A2.sans, fontSize: 13, fontWeight: 800,
      }}>
        <span style={{ fontFamily: A2.serif, fontSize: 18 }}>✦</span>
        AIにゴールを相談
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 1b) Event Type Picker — dropdown open state
// ────────────────────────────────────────────────────────────────────
function EventTypePickerA() {
  const groups = [
    {
      cat: 'お祝い・記念日', color: A2.ev.celebration, glyph: '祝',
      items: ['お宮参り', 'お食い初め', '初節句', 'ハーフバースデー', '七五三', '入学式', '卒業式', '成人式', '誕生日', '記念日', '還暦・古希祝い', '退職祝い', '開業祝い', '引越し・新築祝い'],
      selected: '七五三',
    },
    {
      cat: '結婚式',  color: A2.ev.wedding, glyph: '式',
      items: ['婚約・結納', '結婚式・披露宴', '結婚記念日'],
    },
    {
      cat: '葬儀・法要', color: A2.ev.funeral, glyph: '法',
      items: ['葬儀', '四十九日', '一周忌・三回忌', '七回忌以降'],
    },
    {
      cat: 'その他',     color: A2.ev.other, glyph: '他',
      items: ['その他のイベント'],
    },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: 'rgba(20,15,10,0.42)', fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, top: 100,
        background: A2.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ width: 40, height: 4, background: A2.line, borderRadius: 4, margin: '8px auto 4px' }}/>
        <div style={{
          padding: '10px 20px 12px',
          borderBottom: `1px solid ${A2.line}`,
          display: 'flex', alignItems: 'center',
        }}>
          <div style={{ flex: 1, fontFamily: A2.serif, fontSize: 16, fontWeight: 700 }}>
            種別を選ぶ
            <span style={{ fontSize: 11, color: A2.ink3, marginLeft: 8, fontWeight: 500 }}>24テーマ</span>
          </div>
          <div style={{ color: A2.ink3, fontSize: 20, fontFamily: A2.serif }}>×</div>
        </div>

        {/* Search */}
        <div style={{ padding: '10px 16px' }}>
          <div style={{
            background: A2.surfaceAlt, borderRadius: 999, padding: '8px 14px',
            fontSize: 13, color: A2.ink3, display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>🔎</span><span>テーマ名で検索</span>
          </div>
        </div>

        {/* Groups */}
        <div style={{ flex: 1, overflow: 'hidden', padding: '4px 16px 16px' }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: `${g.color}20`, color: g.color,
                  display: 'grid', placeItems: 'center', fontFamily: A2.serif, fontWeight: 700, fontSize: 11,
                }}>{g.glyph}</div>
                <div style={{
                  fontFamily: A2.serif, fontSize: 12, fontWeight: 700, letterSpacing: 2, color: A2.ink2,
                }}>{g.cat}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map(it => {
                  const isSel = it === g.selected;
                  return (
                    <div key={it} style={{
                      padding: '6px 12px', borderRadius: 999,
                      background: isSel ? g.color : A2.surface,
                      color: isSel ? '#fff' : A2.ink2,
                      border: `1px solid ${isSel ? g.color : A2.line}`,
                      fontSize: 12, fontWeight: 600, fontFamily: A2.sans,
                    }}>{it}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: '12px 20px 28px', borderTop: `1px solid ${A2.line}`,
          background: A2.surface,
        }}>
          <div style={{
            background: A2.accent, color: '#fff', borderRadius: 14,
            padding: '13px 0', textAlign: 'center',
            fontFamily: A2.serif, fontSize: 15, fontWeight: 700,
          }}>「お祝い ・ 七五三」を選ぶ</div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 1c) Task Add Sheet
// ────────────────────────────────────────────────────────────────────
function TaskAddSheetA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'rgba(20,15,10,0.42)', fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: A2.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '8px 20px 28px',
      }}>
        <div style={{ width: 40, height: 4, background: A2.line, borderRadius: 4, margin: '0 auto 12px' }}/>
        <div style={{ fontFamily: A2.serif, fontSize: 17, fontWeight: 700, marginBottom: 4 }}>タスクを追加</div>
        <div style={{ fontSize: 12, color: A2.ink2, marginBottom: 18 }}>
          このイベントに紐づくタスクを登録します
        </div>

        {/* Title */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            タイトル <span style={{ color: A2.accent }}>*</span>
          </div>
          <div style={{
            background: A2.bg, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', fontSize: 14, fontWeight: 600,
          }}>撮影日に着る着物を決める</div>
        </div>

        {/* Phase */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            フェーズ
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[['3ヶ月前'], ['1ヶ月前', true], ['前日'], ['当日']].map(([l, on], i) => (
              <div key={i} style={{
                padding: '6px 12px', borderRadius: 999,
                background: on ? A2.accent : A2.surfaceAlt,
                color: on ? '#fff' : A2.ink2,
                fontSize: 12, fontWeight: 700,
              }}>{l}</div>
            ))}
          </div>
        </div>

        {/* Due date */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            期限（任意）
          </div>
          <div style={{
            background: A2.bg, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', fontFamily: A2.serif, fontSize: 14, fontWeight: 600,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>2026年 2月 15日</span><span style={{ color: A2.accent }}>📅</span>
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: A2.ink2, marginBottom: 6, letterSpacing: 1 }}>
            メモ（任意）
          </div>
          <div style={{
            background: A2.bg, border: `1px solid ${A2.line}`, borderRadius: 12,
            padding: '12px 14px', fontSize: 13, color: A2.ink2, minHeight: 56, lineHeight: 1.5,
          }}>蓮の着物サイズ・色を決める。叔母の着物を借りる選択肢も</div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{
            flex: 1, border: `1px solid ${A2.line}`, borderRadius: 14,
            padding: '12px 0', textAlign: 'center',
            fontSize: 14, color: A2.ink2, fontWeight: 700,
          }}>キャンセル</div>
          <div style={{
            flex: 2, background: A2.accent, color: '#fff', borderRadius: 14,
            padding: '12px 0', textAlign: 'center',
            fontFamily: A2.serif, fontSize: 15, fontWeight: 700,
          }}>タスクを追加</div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 2) AI Chat (sheet shown over event create)
// ────────────────────────────────────────────────────────────────────
function AIChatA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'rgba(20,15,10,0.45)', fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      {/* Backdrop hint */}
      <div style={{
        position: 'absolute', top: 60, left: 24, right: 24,
        fontSize: 11, color: '#fff', opacity: 0.7, fontFamily: A2.serif, letterSpacing: 2,
      }}>新しいイベント</div>

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: A2.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        height: 'calc(100% - 80px)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* drag handle */}
        <div style={{
          width: 40, height: 4, background: A2.line, borderRadius: 4,
          margin: '8px auto 4px',
        }}/>
        {/* header */}
        <div style={{
          padding: '12px 20px 14px', borderBottom: `1px solid ${A2.line}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 999,
            background: `linear-gradient(135deg, ${A2.accent}, ${A2.ev.celebration})`,
            color: '#fff', display: 'grid', placeItems: 'center',
            fontFamily: A2.serif, fontSize: 17,
          }}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: A2.serif, fontSize: 16, fontWeight: 700 }}>AIにゴールを相談</div>
            <div style={{ fontSize: 10, color: A2.ink3, marginTop: 2, letterSpacing: 1 }}>
              本日の残り利用回数 5回
            </div>
          </div>
          <div style={{ color: A2.ink3, fontSize: 20, fontFamily: A2.serif }}>×</div>
        </div>

        {/* messages */}
        <div style={{ flex: 1, padding: '16px 16px 8px', overflow: 'hidden' }}>
          {/* AI greeting */}
          <div style={{ marginBottom: 12 }}>
            <div style={{
              background: A2.surfaceAlt, padding: '12px 14px', borderRadius: 16,
              borderTopLeftRadius: 4, maxWidth: '85%', alignSelf: 'flex-start',
            }}>
              <div style={{ fontSize: 13, color: A2.ink, lineHeight: 1.6 }}>
                こんにちは！大切なイベントの準備、一緒に考えましょう 😊
              </div>
              <div style={{ fontSize: 13, color: A2.ink2, marginTop: 6, lineHeight: 1.6 }}>
                どんなイベントか、誰のためかを教えてください。
              </div>
            </div>
          </div>

          {/* user msg */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
            <div style={{
              background: A2.accent, color: '#fff',
              padding: '10px 14px', borderRadius: 16, borderTopRightRadius: 4,
              maxWidth: '80%', fontSize: 13, lineHeight: 1.5,
            }}>
              子供の七五三の準備を手伝ってほしい
            </div>
          </div>

          {/* AI follow-up */}
          <div>
            <div style={{
              background: A2.surfaceAlt, padding: '12px 14px', borderRadius: 16,
              borderTopLeftRadius: 4, maxWidth: '85%',
            }}>
              <div style={{ fontSize: 13, color: A2.ink, lineHeight: 1.6 }}>
                お子さんの七五三ですね！ぜひ一緒に準備しましょう 😊
              </div>
              <div style={{
                marginTop: 8, padding: '8px 10px',
                background: A2.surface, borderRadius: 8,
                border: `1px solid ${A2.line}`,
              }}>
                <div style={{ fontSize: 12, color: A2.ink2, marginBottom: 4, lineHeight: 1.5 }}>
                  ① お子さんのお名前（例：太郎くん）
                </div>
                <div style={{ fontSize: 12, color: A2.ink2, lineHeight: 1.5 }}>
                  ② 七五三の予定日（例：2026年11月）
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* input */}
        <div style={{
          padding: '10px 14px 14px',
          borderTop: `1px solid ${A2.line}`,
          display: 'flex', gap: 8, alignItems: 'flex-end',
        }}>
          <div style={{
            flex: 1, background: A2.surface, border: `1px solid ${A2.line}`,
            borderRadius: 18, padding: '10px 14px',
            fontSize: 13, color: A2.ink2, minHeight: 40,
          }}>蓮、2026年3月15日</div>
          <div style={{
            background: A2.accent, color: '#fff',
            padding: '10px 16px', borderRadius: 14,
            fontFamily: A2.sans, fontSize: 13, fontWeight: 700,
            display: 'grid', placeItems: 'center',
          }}>送信</div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 3) AI Plan Preview
// ────────────────────────────────────────────────────────────────────
function AIPlanPreviewA() {
  const tasks = [
    { phase: '6ヶ月前', title: '神社の参拝予約',     desc: '川越氷川神社・予約サイトで日時を確定', due: '2025-09-15' },
    { phase: '4ヶ月前', title: '着物・衣装の手配',   desc: 'レンタル or 購入。サイズ確認',         due: '2025-11-15' },
    { phase: '3ヶ月前', title: '写真館の予約',       desc: 'スタジオ撮影 or 出張カメラマン',         due: '2025-12-15' },
    { phase: '2ヶ月前', title: '会食会場の予約',     desc: '人数とアレルギーを確認',                 due: '2026-01-15' },
    { phase: '1ヶ月前', title: '美容院・着付けの予約', desc: '当日の支度時間を逆算',                   due: '2026-02-15' },
    { phase: '前日',     title: '持ち物の最終確認',   desc: '初穂料・千歳飴・撮影衣装',               due: '2026-03-14' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: A2.bg, fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      <SubHeader title="AIが作成した計画" right={
        <div style={{
          padding: '4px 10px', background: A2.surfaceAlt, borderRadius: 999,
          fontSize: 10, color: A2.ink2, fontWeight: 700, letterSpacing: 1,
        }}>✦ AI生成</div>
      } />

      <div style={{ padding: '14px 20px 0' }}>
        {/* Plan card */}
        <div style={{
          background: A2.surface, border: `1px solid ${A2.line}`,
          borderRadius: 16, padding: '14px 16px 16px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 4, bottom: 0,
            background: A2.ev.celebration,
          }}/>
          <div style={{ paddingLeft: 8 }}>
            <div style={{ fontSize: 10, color: A2.ev.celebration, fontWeight: 700, letterSpacing: 2 }}>お祝い</div>
            <div style={{ fontFamily: A2.serif, fontSize: 19, fontWeight: 700, marginTop: 2 }}>
              長男・蓮の七五三
            </div>
            <div style={{ fontSize: 11, color: A2.ink2, marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>📅</span>
              <span style={{ fontFamily: A2.serif, fontWeight: 600 }}>2026年3月15日（日）</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: A2.ink2, lineHeight: 1.6 }}>
              神社参拝・記念撮影・お祝いの食事会まで含めた準備計画。
            </div>
          </div>
        </div>

        {/* Tasks header */}
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginTop: 20, marginBottom: 10,
        }}>
          <div style={{ fontFamily: A2.serif, fontSize: 15, fontWeight: 700 }}>
            逆算タスク
            <span style={{ fontSize: 11, color: A2.ink3, marginLeft: 8, fontWeight: 500 }}>{tasks.length}件</span>
          </div>
          <div style={{ fontSize: 11, color: A2.accent, fontWeight: 700 }}>編集</div>
        </div>

        {/* Tasks timeline */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 6, top: 6, bottom: 8, width: 1,
            background: A2.line,
          }}/>
          {tasks.map((t, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, marginBottom: 10,
              position: 'relative',
            }}>
              <div style={{
                width: 12, height: 12, borderRadius: 12,
                background: A2.surface, border: `2px solid ${A2.accent}`,
                marginTop: 14, flexShrink: 0,
                zIndex: 1,
              }}/>
              <div style={{
                flex: 1, background: A2.surface, padding: '10px 12px',
                border: `1px solid ${A2.line}`, borderRadius: 12,
              }}>
                <div style={{
                  fontFamily: A2.serif, fontSize: 9.5, color: A2.accent, fontWeight: 700, letterSpacing: 2,
                }}>{t.phase}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>{t.title}</div>
                <div style={{ fontSize: 11, color: A2.ink2, marginTop: 3, lineHeight: 1.5 }}>{t.desc}</div>
                <div style={{ fontSize: 10, color: A2.ink3, marginTop: 4, fontFamily: A2.serif, letterSpacing: 1 }}>
                  期限 {new Date(t.due).toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 10, marginBottom: 16 }}>
          <div style={{
            background: A2.accent, color: '#fff', borderRadius: 14,
            padding: '14px 0', textAlign: 'center',
            fontFamily: A2.serif, fontSize: 15, fontWeight: 700,
            boxShadow: '0 4px 14px rgba(181,87,46,0.25)',
          }}>この計画でイベントを作成</div>
          <div style={{
            marginTop: 8, padding: '12px 0', textAlign: 'center',
            fontSize: 13, color: A2.ink2, fontFamily: A2.serif,
            textDecoration: 'underline', textUnderlineOffset: 3,
          }}>やり直す</div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 4) External Integrations list
// ────────────────────────────────────────────────────────────────────
function IntegrationsA() {
  const groups = [
    {
      title: 'お祝い・記念日', tag: 'celebration', color: A2.ev.celebration,
      items: [
        { name: '着付け・レンタル', sub: 'きもの365 / 三松 ほか', count: 4, status: 'connected' },
        { name: '記念撮影・スタジオ', sub: 'スタジオアリス / Rico ほか', count: 6, status: null },
        { name: 'ヘア・メイク', sub: 'ホットペッパー連携', count: 1, status: null },
      ],
    },
    {
      title: '結婚式', tag: 'wedding', color: A2.ev.wedding,
      items: [
        { name: 'ウェディングプランナー', sub: 'ハナユメ / ゼクシィ', count: 2, status: null },
        { name: '招待状デザイン', sub: 'Paperless Post / 印刷', count: 3, status: null },
      ],
    },
    {
      title: '葬儀・法要', tag: 'funeral', color: A2.ev.funeral,
      items: [
        { name: '葬儀社の手配', sub: 'よりそうお葬式 ほか', count: 3, status: null },
        { name: '法要会場・寺院', sub: '提携寺院マップ', count: 5, status: null },
      ],
    },
    {
      title: '法律家・専門家', tag: 'legal', color: A2.ev.other,
      items: [
        { name: '弁護士相談', sub: '相続・遺言 ほか', count: 4, status: 'new', new: true },
        { name: '司法書士', sub: '相続登記 ほか', count: 2, status: 'new', new: true },
        { name: '税理士', sub: '相続税の申告', count: 3, status: 'new', new: true },
      ],
    },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: A2.bg, fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      <SubHeader title="外部サービス連携" right={
        <div style={{
          fontFamily: A2.sans, fontSize: 11, fontWeight: 700,
          color: A2.accent, padding: '4px 10px',
        }}>連携済 1</div>
      } />

      <div style={{ padding: '14px 20px 20px' }}>
        <div style={{
          background: `${A2.accent}10`, border: `1px solid ${A2.accent}30`,
          padding: '12px 14px', borderRadius: 14, marginBottom: 16,
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: A2.accent,
            color: '#fff', display: 'grid', placeItems: 'center',
            fontFamily: A2.serif, fontSize: 14,
          }}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: A2.serif, fontSize: 13, fontWeight: 700 }}>
              イベントに合わせたサービスを提案
            </div>
            <div style={{ fontSize: 11, color: A2.ink2, marginTop: 3, lineHeight: 1.5 }}>
              連携すると、関連タスクから直接予約・相談ができます。
            </div>
          </div>
        </div>

        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 4, height: 14, background: g.color }}/>
              <div style={{
                fontFamily: A2.serif, fontSize: 13, fontWeight: 700, letterSpacing: 1,
              }}>{g.title}</div>
              <div style={{
                fontSize: 9.5, color: A2.ink3, letterSpacing: 1.5, fontWeight: 700,
                background: A2.surfaceAlt, padding: '2px 7px', borderRadius: 999,
              }}>{g.items.length}件</div>
            </div>

            <div style={{
              background: A2.surface, borderRadius: 14, border: `1px solid ${A2.line}`, overflow: 'hidden',
            }}>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px',
                  borderBottom: i < g.items.length - 1 ? `1px solid ${A2.line}` : 'none',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${g.color}18`,
                    color: g.color, display: 'grid', placeItems: 'center',
                    fontFamily: A2.serif, fontSize: 14, fontWeight: 700,
                  }}>{it.name.slice(0,1)}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{it.name}</div>
                      {it.new && (
                        <span style={{
                          fontSize: 8.5, fontWeight: 800, letterSpacing: 1.5,
                          color: '#fff', background: A2.accent, padding: '1px 6px', borderRadius: 999,
                        }}>NEW</span>
                      )}
                    </div>
                    <div style={{ fontSize: 11, color: A2.ink2, marginTop: 1 }}>
                      {it.sub} ・ {it.count}社
                    </div>
                  </div>
                  {it.status === 'connected' ? (
                    <div style={{
                      fontSize: 10, fontWeight: 800, color: A2.ev.other, letterSpacing: 1,
                      padding: '3px 10px', borderRadius: 999,
                      border: `1px solid ${A2.ev.other}`,
                    }}>連携済</div>
                  ) : (
                    <div style={{ fontSize: 18, color: A2.ink3 }}>›</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          textAlign: 'center', padding: '12px 0', fontSize: 11,
          color: A2.ink3, fontFamily: A2.serif, letterSpacing: 2,
        }}>提携サービスは順次拡充予定です</div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// 5) Integration detail — Kimono rental example
// ────────────────────────────────────────────────────────────────────
function IntegrationDetailA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: A2.bg, fontFamily: A2.sans,
      paddingTop: 56, overflow: 'hidden', color: A2.ink, position: 'relative',
    }}>
      <SubHeader title="着付け・レンタル" />

      {/* Hero */}
      <div style={{
        margin: '14px 16px 0', borderRadius: 16, overflow: 'hidden',
        position: 'relative', height: 130,
        background: `linear-gradient(135deg, ${A2.ev.celebration}40, ${A2.accentSoft})`,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 14px)',
        }}/>
        <div style={{
          position: 'absolute', left: 16, bottom: 14, color: '#fff',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, opacity: 0.9 }}>お祝い ・ お子様向け</div>
          <div style={{ fontFamily: A2.serif, fontSize: 22, fontWeight: 700, marginTop: 2,
            textShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>着付け・レンタル</div>
        </div>
      </div>

      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 13, color: A2.ink2, lineHeight: 1.6 }}>
          着物のレンタルから当日の着付け・髪型まで一括で予約できます。LifePathのタスクから直接ご案内可能です。
        </div>

        {/* partner list */}
        <div style={{ marginTop: 18, fontFamily: A2.serif, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
          提携パートナー
          <span style={{ fontSize: 11, color: A2.ink3, marginLeft: 8, fontWeight: 500 }}>4社</span>
        </div>
        <div style={{
          background: A2.surface, borderRadius: 14, border: `1px solid ${A2.line}`, overflow: 'hidden',
        }}>
          {[
            { name: 'きもの365', sub: '七五三・成人式・卒業式', price: '12,000〜', rate: '4.7' },
            { name: '三松',       sub: '七五三・お宮参り',         price: '18,000〜', rate: '4.6' },
            { name: '京都きもの友禅', sub: '成人式・婚礼',         price: '22,000〜', rate: '4.8' },
            { name: 'ジョイフル恵利', sub: '七五三・成人式',       price: '9,800〜',  rate: '4.5' },
          ].map((p, i, arr) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px',
              borderBottom: i < arr.length - 1 ? `1px solid ${A2.line}` : 'none',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 999, background: A2.surfaceAlt,
                color: A2.accent, display: 'grid', placeItems: 'center',
                fontFamily: A2.serif, fontSize: 16, fontWeight: 700,
              }}>{p.name.slice(0,1)}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: A2.ink2, marginTop: 1 }}>{p.sub}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: A2.serif, fontSize: 12, fontWeight: 700, color: A2.accent }}>¥{p.price}</div>
                <div style={{ fontSize: 10, color: A2.ink3, marginTop: 1 }}>★ {p.rate}</div>
              </div>
            </div>
          ))}
        </div>

        {/* applies-to */}
        <div style={{
          marginTop: 18, padding: '12px 14px',
          background: A2.surface, borderRadius: 14, border: `1px solid ${A2.line}`,
        }}>
          <div style={{
            fontFamily: A2.serif, fontSize: 11, color: A2.ink2, letterSpacing: 2, fontWeight: 700, marginBottom: 8,
          }}>このサービスが活躍するタスク</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['着物・衣装の手配', '美容院・着付けの予約', '当日の支度', '前撮り撮影'].map(t => (
              <div key={t} style={{
                padding: '5px 10px', borderRadius: 999,
                background: `${A2.ev.celebration}18`, color: A2.ev.celebration,
                fontSize: 11, fontWeight: 700,
              }}>{t}</div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 22 }}>
          <div style={{
            background: A2.accent, color: '#fff', borderRadius: 14,
            padding: '14px 0', textAlign: 'center',
            fontFamily: A2.serif, fontSize: 15, fontWeight: 700,
            boxShadow: '0 4px 14px rgba(181,87,46,0.25)',
          }}>連携する</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NewEventA, EventTypePickerA, TaskAddSheetA, AIChatA, AIPlanPreviewA, IntegrationsA, IntegrationDetailA });

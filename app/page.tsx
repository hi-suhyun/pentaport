"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Music, Volume2, ArrowLeft, ArrowRight } from "lucide-react"

export default function RockFestivalBooth() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [showStory, setShowStory] = useState(false)
  const [storyPage, setStoryPage] = useState(0)

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    const scrollPosition = element.scrollTop
    const sectionHeight = element.scrollHeight / 4

    if (scrollPosition < sectionHeight) {
      setCurrentSection(0)
    } else if (scrollPosition < sectionHeight * 2) {
      setCurrentSection(1)
    } else if (scrollPosition < sectionHeight * 3) {
      setCurrentSection(2)
    } else {
      setCurrentSection(3)
    }
  }

  const handleTestClick = () => {
    setShowStory(true)
  }

  const content = {
    ko: {
      backButton: "← 뒤로",
      section2: {
        title: "호락단 모집",
        text1:
          "<어흥도 흥이다> 는 호랑이와 락을 합친 ‘호락이’라는 전설적인 존재가 펜타포트 20주년을 맞아 인간세계로 내려온다는 설정을 배경으로 하고 있습니다.",
        text2: 
          "호락이는 한국적인 정서인 ‘흥’을 즐기고 전파하는 존재로 <어흥도 흥이다>부스는 호락이가 내려오는 펜타포트 3일간 저희 호락단이 호락이를 맞이하며, 함께할 호락단원들을 모집한다는 컨셉입니다.",
        text3:
          "호랑이가 나오는 대표적인 전래동화 <해님달님>을 배경으로 하는 여러 컨텐츠들을 모두 수행하면, 정식으로 호락단원으로 임명합니다. 락을 사랑하고 흥을 아는 이들, 호락단의 일원이 되어 함께 외쳐봅시다. “어흥도 흥이다!”",
      },
      section1: {
        //title: "호락신 강림",
        text1: "스무 해를 맞은 펜타포트 락 페스티벌.",
        text2: "그 기념비적인 해에, 흥의 기운을 지닌 용맹한 호걸, '호락신'이 인간 세상에 강림하신다 하도다.",
        text3:
          "이를 축하하고자 마음을 같이 하는 자들이 모여 스스로를 '호락단'이라 일컬었으니, 이제 뜻을 함께하고 흥을 나눌 벗을 찾고 있소이다.",
        text4: "락을 사랑하고, 즐길 줄 아는 이여...",
        text5: "호락단의 이름 아래 함께 외쳐보지 않겠는가?",
      },
      section3: {
        title: "당신의\n 락 취향을 알아보고,\n부채를 꾸며보거라",
        button: "해님달님 이야기 보러가기",
      },
      story: [
      {
        page: "1/3",
        title: "☀️ 해님 달님 이야기 🌙",
        illustration: "🏠👩‍👧‍👦🐅🌙",
        paragraphs: [
          {
            text: "옛날 옛적, 깊은 산골짜기에 가난하지만 정답게 살아가는 오누이와 홀어머니가 있었어요. 어머니는 매일같이 떡 고개를 넘어 장터에 떡을 팔러 다니며 자식들을 홀로 키워냈지요.",
            image: "/images/1.png",
          },
          {
            text: '그러던 어느 날, 어머니가 떡을 팔고 집으로 돌아오던 밤이었습니다. 첫 번째 고개에서 무서운 호랑이가 길을 막았어요. \n\n"떡 하나 주면 안 잡아먹지." 겁에 질린 어머니는 떡을 하나 던져 주었고, 그때는 물러나는 듯하던 호랑이는 고개를 넘을 때마다 또다시 나타나 떡 하나씩 빼앗아 먹고, 결국 어머니까지 꿀꺽 삼켜버리고 말았답니다.',
            image: "/images/2.png",
          },
          {
            text: '배를 두드리며 만족한 호랑이는 이제 남은 아이들까지 잡아먹으려 어머니 옷을 걸치고 그 집 문 앞에 섰습니다. "애들아, 엄마다. 문 좀 열어다오."',
            image: "/images/3.png",
          },
        ],
      },
      {
        page: "2/3",
        // title: "☀️ 해님 달님 이야기 🌙",
        illustration: "🌳👧👦🪢☀️🌙⭐",
        paragraphs: [
          {
            text: '기뻐서 문을 열려던 여동생을 오빠는 재빨리 막아서며 말했어요. \n\n"그럼, 손을 내밀어 봐." \n\n문풍지를 뚫고 털북숭이 앞발이 쑥! \n그리고 그 틈 사이로 번뜩이는 노란 눈동자까지. 남매는 그게 호랑이인 걸 단번에 눈치채고, 숨을 쉬지 않고 뒷문으로 빠져나가 높은 나무 위로 올라가 몸을 숨겼습니다.',
            image: "/images/4.png",
          },
          {
            text: "분노한 호랑이는 나무 아래에서 으르렁거리며 손을 뻗었지만, 오누이의 몸에는 닿지 않았지요.",
            image: "/images/5.png",
          },
          {
            text: '결국 남매는 하늘을 향해 두 손을 모으고 빌었어요. \n\n"하느님, 저희를 구해주시려면 새 동아줄을 내려 주시고, 아니시라면 썩은 줄을 내려 주세요." \n\n그 순간 하늘에서 반짝이는 새 동아줄이 스르륵 내려왔고, 남매는 그 줄을 타고 하늘로 올라가 해와 달이 되어 세상을 비추는 존재가 되었답니다. \n\n호랑이도 하늘을 향해 똑같이 기도했고, 하늘은 이번엔 썩은 동아줄을 내려주었지요. 호랑이는 그것도 모르고 기세 좋게 올라가다 줄이 끊어지며 곤두박질쳤고, 그 피가 떨어져 수수밭의 수수가 붉게 물들었다고 전해집니다.',
            image: "/images/6.png",
          },
        ],
      },
      {
        page: "3/3",
        title: "그리고 지금",
        illustration: "🎸🐅🎤",
        paragraphs: [
          {
            text: "이러한 <해님달님> 이야기를 배경으로 하는 컨텐츠들을 모두 수행하면, 여러분도 정식으로 호락단원으로 임명합니다! \n\n2025년 8월 1일부터 3일, 펜타포트의 20주년을 함께 축하해주세요. \n\n어-흥!",
            image: "/images/13.png",
          }   
        ]     
      },
      // {
      //   page: "",
      //   title: "코너 설명",
      //   illustration: "🎸🐅🎤",
      //   paragraphs: [
      //     {
      //       text: [
      //         "락(樂) 기질을 알고자 하는 자,호락단의 맹렬한 흥을 깨우고자 하는 자, 호락풍류 진단서에 답해보시게.\n\n",
      //         "진단서를 읽고 그대에게 해당되는 항목에 체크를 하게.\n\n",
      //         "체크한 개수에 따라 그대 안에 숨겨진 락의 결,\n",
      //         "해님형, 달님형, 혹은 범형이 드러날 것이니라.\n\n",
      //         "결과 확인 후, 진단서를 앞에 있는 호락단원에게 살며시 보여주시게.\n\n",
      //         "그대의 락 기질에 맞는 도장이 곧 건네질 터이니라.\n\n",
      //         "*진단서는 마지막 관문까지 꼭 간직해 두시게.",
      //       ].join("")
      //       //image: "/images/9.png", 
      //     },
      //   ],
      // },

    ],
      corner: [
      {
        title: "🧁 락 하나 주면 안 잡아먹지",
        text:
          "옛 전래동화 속 호랑이는 “떡 하나 주면 안 잡아먹지!” 하며 사람들에게 떡을 달라 했다지.\n\n이제 그 호랑이는 HO-ROCK-EE로 다시 태어나 펜타포트 호락단 부스에 등장했소!\n\n락에 굶주린 채 혀를 내밀고 있는 호락이에게 락 스피릿이 담긴 떡을 정성껏 바쳐보시게.\n\n떡이 혀 위에 무사히 안착하면, 호락 입문의 첫 번째 단계 통과!\n\n긴장을 풀고, 손끝의 정성을 다하여 조준하시게. 락의 정령이 그대의 손을 인도할 것이니.",
      },
      {
        title: "🌞 호락단 타투 & 포토존",
        text:
          "이제 그대도 진정한 호락단원이 될 기회를 얻게 되었소.\n\n마음에 드는 타투 스티커를 골라 손목이나 팔에 붙여보시게.\n그 표식은 곧 호락단의 일원임을 증명하는 도장이 될 것이오.\n\n그 후, 해님달님 이야기를 배경으로 한 포토존으로 향하시게.\n창호지 뒤에 팔을 내밀어 전래동화 속 장면과 하나가 된 모습을 사진으로 남겨보시오.\n\n신비로운 순간을 기록하며, 호락단원으로서의 첫 발자국을 간직하시게나.",
      },
      {
        title: "🧭 호락풍류 진단서",
        text:
          "락(樂) 기질을 알고자 하는 자,\n호락단의 맹렬한 흥을 깨우고자 하는 자,\n호락풍류 진단서에 답해보시게.\n\n진단서를 읽고, 자신에게 해당되는 항목에 체크하시오.\n체크 수에 따라 해님형, 달님형, 범형이 드러날 것이니라.\n\n결과를 확인한 후에는, 가까운 호락단원에게 진단서를 보여주시오.\n그대의 락 기질에 맞는 도장이 곧 건네질 터이니라.\n\n* 진단서는 마지막 관문까지 꼭 간직하시게나!",
      },
      {
        title: "🎨 호락 부채 꾸미기",
        text:
          "이제 그대만의 호락단 수련용 부채를 꾸밀 차례이니라!\n\n부채에는 펜타포트 락마당의 공연 일정이 적혀 있소.\n진단서를 통해 받은 그대의 락 기질에 맞는 표식을 부채 위에 새기고,\n자신만의 색으로 채워 넣으시게.\n\n그 부채는 곧 그대의 취향과 에너지,\n락을 향한 열정이 담긴 호락단의 증표가 될 것이니라.\n\n마음을 담아 정성껏 완성해보시게나.",
      },
      {
        title: "🌳 호락나무에 마음을",
        text:
          "진단서 뒷면에는 다음 문장이 있을 것이오:\n“나에게 펜타포트란 ___다.”\n\n그대가 느낀 펜타포트의 의미를 마음껏 적어보시게.\n열정, 위로, 자유… 어떤 것이든 진심이면 충분하오.\n\n그리고 그 문장을 소원나무인 호락나무 가지에 정성껏 매달아보시게.\n\n수많은 호락단원들의 마음이 모인 이 나무는\n펜타포트 20주년을 기념하는 가장 아름다운 상징이 될 것이오.\n\n바람이 불 때마다 그 진심이 나뭇잎 사이로 흔들리며\n모든 이의 마음을 울리게 될 것이니라.",
      },
    ],

      // storyEnding: {
      //   title: "그리고 지금",
      //   text: "펜타포트 락마당 20주년을 맞아,\n호락이는 인간 세상에 다시 모습을 드러냅니다.\n흥이 깃든 자들을 모아 '호락단'을 이루고,\n이 뜨거운 마당을 함께 누리기 위해서요.",
      //   festival: "PENTAPORT ROCK FESTIVAL\nHORAK",
      // },
    },
    en: {
      backButton: "← Back",
      section2: {
        title: "Horock Squad Recruitment",
        text1:[
          "Behind this theme is the legendary being HO-ROCK-EE —a fusion of “ho-rang-i” (tiger) and rock—who has descended into the human world to celebrate the 20th anniversary of Pentaport Rock Festival.",
          "\n\nHO-ROCK-EE is a creature born from the Korean spirit of “heung” —joy, excitement, and rhythm—and he lives to spread it far and wide.",
          " During the three days of Pentaport, our Horockdan welcomes HO-ROCK-EE to the festival and begins recruiting new Horockdan members to join the celebration.",
        ].join(""),
        text2:
          "Visitors who complete all of our interactive activities—based on the classic Korean folktale “The Sun and the Moon”, featuring a tiger—will be officially initiated into the Horockdan.\n\nFor those who love rock and know how to ride the wave of heung, join the ranks of Horockdan and shout it loud:\n“A Roar Still Rocks!”",
      },
      section1: {
        //title: "Descent of the Rock God",
        text1: "The Pentaport Rock Festival celebrates its twentieth year.",
        text2:
          "In this monumental year, a brave hero imbued with the spirit of excitement, the 'Rock God,' descends to the human world.",
        text3:
          "To celebrate this, like-minded souls have gathered and call themselves the 'Horock Squad,' now seeking companions to share their purpose and excitement.",
        text4: "You who love rock and know how to enjoy it...",
        text5: "Will you not join us in shouting together under the name of Horock Squad?",
      },
      section3: {
        title: "Discover your rock taste\nand decorate a fan",
        button: "Watch the story",
      },
      story: [
      {
        page: "1/3",
        title: "☀️ The Sun and Moon Story 🌙",
        illustration: "🏠👩‍👧‍👦🐅🌙",
        paragraphs: [
          {
            text: "Long, long ago, in a deep mountain valley, there lived a poor but loving family: a brother, a sister, and their widowed mother. \n\nEvery day, the mother crossed several mountain ridges to sell rice cakes at the market, raising her children all on her own.",
            image: "/images/1.png",
          },
          {
            text: "Then one night, as the mother was returning home from the market, a terrifying tiger blocked her path at the first ridge. \n\n“If you give me a rice cake, I won’t eat you,” the tiger growled. \n\nTerrified, the mother threw him one. Though the tiger seemed to retreat, he reappeared at every ridge, demanding more rice cakes. Eventually, with nothing left to give, the tiger swallowed the poor mother whole.",
            image: "/images/2.png",
          },
          {
            text: "Patting his full belly with satisfaction, the tiger set off toward the children’s home, wearing the mother’s clothes to trick them. Standing in front of the door, he called out, \n\n“Children, it’s Mother. Please open the door.”",
            image: "/images/3.png",
          },
        ],
      },
      {
        page: "2/3",
        // title: "🌳 Heaven's Help",
        illustration: "🌳👧👦🪢☀️🌙⭐",
        paragraphs: [
          {
            text: "Overjoyed, the younger sister rushed to open it, but her older brother stopped her just in time. \n\n“Then show us your hand,” \nhe said cautiously. \n\nA furry paw suddenly poked through the door paper—followed by the gleam of yellow eyes. The siblings instantly knew it was the tiger. Without a breath, they slipped out the back door and climbed up a tall tree to hide.",
            image: "/images/4.png",
          },
          {
            text: "The furious tiger stood below, growling and stretching out his claws, but he couldn't reach them.",
            image: "/images/5.png",
          },
          {
            text: "The siblings pressed their hands together and prayed to the heavens: \n\n“If you wish to save us, send down a strong, new rope. If not, send a rotten one instead.”\n\nJust then, a sparkling, new rope descended from the sky. Climbing it, the brother and sister rose into the heavens—\nand became the sun and the moon, lighting up the world.\n\nThe tiger also prayed to the sky in the same way, and this time, a rotten rope was sent down.\nUnaware, the tiger climbed up confidently—\nbut the rope snapped, and he plunged to the ground. It is said that his blood soaked the sorghum fields, which turned the grains red to this day.",
            image: "/images/6.png",
          }
        ],
      },
      {
        page: "3/3",
        title: "And Now",
        illustration: "🎸🐅🎤",
        paragraphs: [
          {
            text: "Once you complete all the content based on the story of The Sun and the Moon, you will be officially appointed as a member of the Horockdan! \n\nJoin us in celebrating the 20th anniversary of Pentaport from August 1 to 3, 2025. \n\nRoar!",
            image: "/images/10.png",
          },
        ],
      },
      // {
      //   page: "",
      //   title: "corner description",
      //   illustration: "🎸🐅🎤",
      //   paragraphs: [
      //     {
      //       text: [
      //         "Seekers of the Rock Spirit!\n\n",
      //         "If you wish to awaken the wild energy of the Horockdan,",
      //         "take the Horock Flow Diagnosis.\n\n",

      //         "Read through the scroll carefully,",
      //         "and place a checkmark next to every statement",
      //         "that resonates with your inner rhythm.\n\n",
      //         "Based on the number of checks, your hidden Rock Soul will be revealed.",
      //         "Are you a Sun Type, Moon Type, or a fierce Tiger Type?\n\n",
      //         "Once you’ve discovered your result,",
      //         "present your completed diagnosis to a nearby Horockdan member.\n\n",
      //         "They shall bestow upon you a stamp that matches your type.\n\n",
      //         "* Do not lose your diagnosis paper!",
      //         " You’ll need it to pass the final rite of Horock initiation.",
      //       ].join("")
      //     },
      //   ],
      // },
      ],
      corner: [
      {
        title: "🧁 Rock Rice Cake Toss",
        text:
          "\"Give me a rice cake, and I won't eat you!\"\nSo said the tiger in old Korean folktales.\n\nNow, that legendary tiger returns today… reborn as the HO-ROCK-EE at the Pentaport Horockdan Booth!\n\nHungry for rock, HO-ROCK-EE awaits your tribute.\nOffer your rock-infused rice cake with care!\n\nIf it lands safely on the HO-ROCK-EE’s tongue, congratulations!\nYou’ve passed the first rite of Horock initiation.\n\nSteady your hands, aim true, and feed the beast within.\nLet the Rock Spirit guide you!",
      },
      {
        title: "🌞 Horockdan Tattoo & Photo Zone",
        text:
          "Now, you too have earned the chance to become a true Horockdan member.\n\nChoose your favorite tattoo sticker and place it proudly on your wrist or arm.\nThis mark is your rite of passage.\n\nOnce tattooed, step into our photo zone, where a magical scene from the folktale “The Sun and the Moon” awaits you.\nThere, behind a traditional Korean paper window Changhoji, extend your tattooed arm through the opening…\nand capture a photo that blends you, the myth, and the moment.\n\nImmortalize the memory—a snapshot of you stepping into a living fairy tale as a newly initiated Horockdan warrior!",
      },
      {
        title: "🧭 Horock Flow Diagnosis",
        text:
          "Seekers of the Rock Spirit!\nIf you wish to awaken the wild energy of the Horockdan, take the Horock Flow Diagnosis.\n\nRead through the scroll carefully,\nand place a checkmark next to every statement that resonates with your inner rhythm.\n\nBased on the number of checks, your hidden Rock Soul will be revealed.\nAre you a Sun Type, Moon Type, or a fierce Tiger Type?\n\nOnce you've discovered your result, present your completed diagnosis to a nearby Horockdan member.\nThey shall bestow upon you a stamp that matches your type.\n\n* Do not lose your diagnosis paper!\nYou’ll need it to pass the final rite of Horock initiation.",
      },
      {
        title: "🎨 Horock Fan Decoration",
        text:
          "Now it is time to craft your Horockdan Training Fan!\nOn this fan lies the Pentaport Rock Stage Schedule.\n\nBased on your earlier diagnosis, you will receive a symbol that reflects your inner Rock Type—a unique mark of your taste and musical soul.\n\nPlace your symbol over the timeslot of the performance you most anticipate.\nThen, decorate your fan with colors and flair that speak to your Rock journey.\n\nWhen your fan reflects your passion and spirit, it becomes not just a schedule but a Horockdan badge of honor,\netched with your rhythm, your energy, and your love for Rock.",
      },
      {
        title: "🌳 HoRock Tree of Wishes",
        text:
          "On the back of your Rock Spirit Diagnosis, you’ll find a simple yet powerful prompt:\n\"To me, Pentaport is ___.\"\n\nWrite down what Pentaport truly means to you.\nIt might be passion, healing, or freedom.\nWhatever it is, let it come from the heart. Your truth is the truest answer.\n\nOnce written, tie your message to the branches of the HoRock Tree adorned with the voices of many Horockdan souls.\n\nAs the wind passes through these heartfelt notes, the tree becomes a living tribute to the 20th anniversary of Pentaport—a moving monument of music, memory, and meaning.",
      },
      ],
    },
  }

  const currentContent = content[selectedLanguage as keyof typeof content] || content.ko

  if (showStory) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
          <div className="w-full max-w-sm mx-auto min-h-screen relative">
            <div className="border-4 border-amber-900 bg-gradient-to-b from-amber-100/90 to-amber-200/90 min-h-screen relative backdrop-blur-sm">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-amber-100/95 to-amber-200/95 border-b-2 border-amber-900 p-4 z-10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <Button
                    onClick={() => setShowStory(false)}
                    className="text-amber-900 hover:bg-amber-300/50 p-2 korean-modern"
                    variant="ghost"
                  >
                    {currentContent.backButton}
                  </Button>
                  <div className="text-sm font-jeju text-center text-amber-800">
                    {currentContent.story[storyPage].page}
                  </div>
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 min-h-[calc(100vh-140px)]">
                <div className="bg-white/85 rounded-lg border-3 border-amber-800 shadow-2xl p-6 mb-6 backdrop-blur-sm">
                  {/* Story Title */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-jeju text-amber-900 mb-2">
                      {currentContent.story[storyPage].title}
                    </h2>
                  </div>

                  {/* Story image and text */}
                  <div className="korean-traditional text-amber-900 text-sm leading-relaxed text-left space-y-6">
                    {currentContent.story[storyPage].paragraphs.map((para, idx) => (
                      <div key={idx}>
                        
                        {para.image && (
                          <img
                            src={para.image}
                            alt={`paragraph ${idx + 1}`}
                            className="w-full max-w-md mx-auto rounded-lg border border-amber-300 shadow-md my-4"
                          />
                        )}
                        <p className="whitespace-pre-line mb-2">{para.text}</p>
                      </div>
                    ))}
                  </div>
                </div> 

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button
                    onClick={() => setStoryPage(Math.max(0, storyPage - 1))}
                    disabled={storyPage === 0}
                    className="bg-amber-600 hover:bg-amber-700 text-white korean-modern disabled:opacity-50"
                    size="sm"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    {selectedLanguage === "en" ? "Previous" : "이전"}
                  </Button>

                  <div className="flex space-x-2">
                    {currentContent.story.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === storyPage ? "bg-red-600" : "bg-amber-400"}`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      setStoryPage(Math.min(currentContent.story.length - 1, storyPage + 1));
                      window.scrollTo({ top: 0 }); 
                    }}
                    disabled={storyPage === currentContent.story.length - 1}
                    className="bg-amber-600 hover:bg-amber-700 text-white korean-modern disabled:opacity-50"
                    size="sm"
                  >
                    {selectedLanguage === "en" ? "Next" : "다음"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center p-4 border-t-2 border-amber-900 bg-gradient-to-r from-amber-100/95 to-amber-200/95 backdrop-blur-sm">
                <p className="text-xs text-amber-800 korean-modern">2025 PENTAPORT X HOROCKDAN</p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-900"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-900"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-900"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-900"></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (!selectedLanguage) {
    return (
      <>
        <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-800" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-800" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-800" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-800" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
            </div>

            <div
              className="absolute"
              style={{
                top: '20%',
                left: '15%',
                writingMode: 'vertical-rl', // 또는 vertical-lr
                textAlign: 'center',
              }}
            >
              <h1 className="text-3xl font-jeju text-amber-900 mb-2">어흥도 흥이다</h1>
              <p className="text-2xl font-jeju text-amber-700 italic">A roar still rocks</p>
            </div>

            {/* Language selection buttons */}
            <div className="flex justify-center items-center">
              <div className="pt-96">
                <div className="flex flex-col items-center space-y-4">
                  <Button onClick={() => setSelectedLanguage("ko")} className="w-60 h-[60px] bg-red-700 text-white font-bold py-3 rounded-xl border-2 border-red-800 shadow-lg">
                    한국어
                  </Button>
                  <Button onClick={() => setSelectedLanguage("en")} className="w-60 h-[60px] bg-amber-600 text-white font-bold py-3 rounded-xl border-2 border-amber-800 shadow-lg">
                    English
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer decoration */}
            <div className="mt-12 text-center">
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🤘</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-amber-800 mt-2">2025 PENTAPORT X HOROCKDAN</p>
            </div>
          </div>
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="w-full max-w-sm mx-auto min-h-screen">
          <div className="border-4 border-amber-800 bg-amber-50 min-h-screen relative">
            {/* Header */}
            <div className="sticky top-0 bg-amber-50 border-b-2 border-amber-800 p-4 z-10">
              <div className="flex items-center justify-between">
                <Button
                  onClick={() => setSelectedLanguage(null)}
                  className="text-amber-800 hover:bg-amber-200 p-2 korean-modern"
                  variant="ghost"
                >
                  {currentContent.backButton}
                </Button>
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="h-[calc(100vh-80px)] overflow-y-auto p-6 space-y-8" onScroll={handleScroll}>
              {/* Section 1 */}
              <div className="py-16 flex flex-col justify-center">
                <div className="text-center mb-6">
                  {/* <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center border-2 border-amber-800 mx-auto mb-4">
                    <div className="text-4xl">🐅</div>
                  </div> */}
                  <h2 className="text-2xl font-jeju font-bold text-amber-900 whitespace-pre-line">
                    {currentContent.section1.title}
                  </h2>
                </div>

                <div className=" p-6 rounded-lg ">
                  <div className="text-amber-900 leading-relaxed text-sm space-y-4 korean-traditional">
                    <p className="whitespace-pre-line">{currentContent.section1.text1}</p>
                    <p className="whitespace-pre-line">{currentContent.section1.text2}</p>
                    <p className="whitespace-pre-line">{currentContent.section1.text3}</p>
                    <p className="whitespace-pre-line">{currentContent.section1.text4}</p>
                    <p className="className= font-bold text-red-800 korean-brush">{currentContent.section1.text5}</p>


                  </div>
                </div>

              </div>

              {/* Section 2 */}
              <div className="py-16 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center border-2 border-amber-800 mx-auto mb-4">
                    <div className="text-4xl">⚡</div>
                  </div>
                  <h2 className="text-2xl font-jeju font-bold text-amber-900 whitespace-pre-line">
                    {currentContent.section2.title}
                  </h2>
                </div>

                <div className="bg-white/80 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
                  <div className="text-amber-900 leading-relaxed text-sm space-y-4 korean-traditional">
                    <p>{currentContent.section2.text1}</p>
                    <p>{currentContent.section2.text2}</p>
                    <p>{currentContent.section2.text3}</p>
                    <p>{currentContent.section2.text4}</p>
                    <p className="font-bold text-red-800 korean-brush">{currentContent.section2.text5}</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="py-16 flex flex-col justify-center">
                <div className="text-center">
                  <div className="mb-8">
                    <div className="text-4xl mb-4">🎸</div>
                    <h3 className="text-2xl font-jeju font-bold text-amber-900 whitespace-pre-line">
                      {currentContent.section3.title}
                    </h3>
                  </div>

                  <div className="bg-white/90 p-8 rounded-lg border-2 border-amber-300 shadow-lg">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">📖</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-4 rounded-lg border-2 border-red-800 shadow-lg text-md korean-modern"
                      onClick={handleTestClick}
                    >
                      {currentContent.section3.button}
                    </Button>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-800"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-800"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-800"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-800"></div>
          </div>
        </div>
      </div>
    </>
  )
}

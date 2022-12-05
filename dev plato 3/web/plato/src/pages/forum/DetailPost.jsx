import React, { useState } from 'react';
import {
  StarIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  BellAlertIcon
} from '@heroicons/react/20/solid';
import QuillEditor from '../../helpers/QuillEditor';

export const DetailPost = () => {
  const testFavorite = ['UnivIndonesia', 'genshin_impact'];

  const testCommunity = [
    'Buat Komunitas Baru',
    'UnivIndonesia',
    'marketing',
    'ngajarngajar',
    'AAIS4',
    'jakmaaaaaania',
    'MEMES',
    'politik',
    'bisnis',
    'cuan',
    'ngapainya',
    'genshin_impact'
  ];

  const testFeed = ['Awal', 'Lagi Rame', 'Semua', 'Panas!'];
  const rules = [
    'Off-topic posts will be removed',
    'Do not spam',
    'No abusive comments',
    'No trolls',
    'No racism or hate speech',
    'No misinformation',
    'Editorialized titles',
    'Yeah, we banned the other guys, too'
  ];

  const [commentPost, setCommentPost] = useState('');

  return (
    <div className="relative col-span-12 flex h-[100vw] justify-between gap-5">
      <div className="mt-0 mb-6 w-1/5">
        <div className="flex flex-col rounded-md border border-gray-300 bg-white pl-6 pt-6 pr-6 pb-6">
          <div className="mb-2 flex flex-col gap-1">
            <p className="text-gray-400">Favorit</p>
            {testFavorite.map((data) => {
              return (
                <div className="flex flex-row items-center justify-between text-sm text-gray-600">
                  <div>{data}</div>
                  <StarIcon className="h-4 w-4" />
                </div>
              );
            })}
          </div>
          <div className="mb-2 flex flex-col gap-1">
            <p className="text-gray-400">Komunitas Kamu</p>
            {testCommunity.map((data) => {
              return (
                <div className="flex flex-row items-center justify-between text-sm text-gray-600">
                  <div>{data}</div>
                  <StarIcon className="h-4 w-4" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-400">Feed</p>
            {testFeed.map((data) => {
              return (
                <div className="flex flex-row items-center justify-between text-sm text-gray-600">
                  <div>{data}</div>
                  <StarIcon className="h-4 w-4" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="t-0 mb-6 flex w-3/5 flex-col bg-white">
        <div className="rounded-md border border-gray-300 bg-white pt-6">
          <div className="absolute flex w-10 flex-col items-center gap-2">
            <ArrowUpCircleIcon className="h-7 w-7" />
            <div>93</div>
            <ArrowDownCircleIcon className="h-7 w-7" />
          </div>
          <div className="w-full pl-10">
            <div className="flex flex-row justify-between gap-2 pr-4">
              <div className="flex items-center gap-2">
                <img
                  className="h-5 w-5 rounded-full"
                  src="https://assets.stickpng.com/images/5cb78e867ff3656569c8cebe.png"
                />
                <div className="text-sm font-semibold">Bjorka</div>
                <div className="text-xs font-light text-gray-400">
                  . Posted by Glittering-Dot9642 12 hours ago
                </div>
              </div>
              <BellAlertIcon className="h-7 w-7" />
            </div>
            <div className="mr-5 mb-2 flex justify-between pt-4">
              <div className="mr-4 w-4/5">
                <div className="text-md mb-2 font-medium">
                  Jelang F1 GP Abu Dhabi 2022, Lewis Hamilton Ternyata Masih Sakit Hati Gelar Juara
                  Musim Lalu Direbut Max Verstappen
                </div>
                <div className="text-justify text-sm font-normal">
                  Jelang balapan Formula One (F1) GP Abu Dhabi 2022, Lewis Hamilton mendapatkan
                  kesempatan untuk mengenang kembali momen gelar juara pertamanya di musim 2008 kala
                  mengaspal di Sirkuit Yas Marina, Uni Emirat Arab (UEA). Menariknya, ia menyebut
                  momen tersebut diraihnya dengan usaha sendiri dan bukan manipulasi seperti yang ia
                  rasakan musim lalu saat gelar juara diambil oleh Max Verstappen (Red Bull Racing).
                </div>
              </div>
              <img
                className="h-24 w-36 rounded-md"
                src="https://img.okezone.com/content/2022/11/16/37/2708666/jelang-f1-gp-abu-dhabi-2022-lewis-hamilton-ternyata-masih-sakit-hati-gelar-juara-musim-lalu-direbut-max-verstappen-b2tpJR5BzD.JPG"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>Comment</div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
                <div>Award</div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <div>Share</div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                <div>Save</div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                </svg>
                <div>Hide</div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>Report</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-thin text-gray-400">
                <div>75% Upvote</div>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <div className="text-sm font-light text-gray-400">Comment as Dominic_Toretto</div>
              <div className="mt-2 mr-5 mb-14">
                <QuillEditor
                  style={{ height: '150px', marginBottom: '0' }}
                  value={commentPost}
                  setValue={setCommentPost}
                />
              </div>
              <button className="rounded-full bg-indigo-500 px-4 py-1 text-sm text-white">
                Comment
              </button>
            </div>
          </div>

          <div className="t-0 mb-6 flex w-full flex-col bg-white">
            <div className="ml-2 flex rounded-md bg-white pb-2">
              <div className="mt-2 flex">
                <div className="flex flex-col items-center pb-1">
                  <img
                    className="object-fit h-8 w-8 rounded-full border border-gray-300"
                    src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <div className="mt-2 flex h-full w-0 flex-col border border-gray-400"></div>
                </div>
                <div className="mt-1 ml-2 flex w-11/12 flex-col">
                  <div className="text-sm font-medium">Fajar</div>
                  <div className="mt-2 text-sm font-light">
                    Melampirkan komentar Anda ke bagian tertentu dari dokumen membuat umpan balik
                    Anda lebih jelas. Jika orang lain mengomentari dokumen, membalas komentar mereka
                    memungkinkan Anda berdiskusi, bahkan ketika tidak semua orang di dokumen secara
                    bersamaan.
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs">
                      <ArrowUpCircleIcon className="h-5 w-5" />
                      <div>Vote</div>
                      <ArrowDownCircleIcon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Reply</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Edit</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Delete</div>
                    </div>
                  </div>

                  <div className="mt-2 flex">
                    <div className="flex flex-col items-center pb-1">
                      <img
                        className="object-fit h-8 w-8 rounded-full border border-gray-300"
                        src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                      <div className="mt-2 flex h-full w-0 flex-col border border-gray-400"></div>
                    </div>
                    <div className="mt-1 ml-2 flex w-11/12 flex-col">
                      <div className="text-sm font-medium">Fajar</div>
                      <div className="mt-2 text-sm font-light">
                        Melampirkan komentar Anda ke bagian tertentu dari dokumen membuat umpan
                        balik Anda lebih jelas. Jika orang lain mengomentari dokumen, membalas
                        komentar mereka memungkinkan Anda berdiskusi, bahkan ketika tidak semua
                        orang di dokumen secara bersamaan.
                      </div>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs">
                          <ArrowUpCircleIcon className="h-5 w-5" />
                          <div>Vote</div>
                          <ArrowDownCircleIcon className="h-5 w-5" />
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>Reply</div>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>Edit</div>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>Delete</div>
                        </div>
                      </div>

                      <div className="mt-2 flex">
                        <div className="flex flex-col items-center pb-1">
                          <img
                            className="object-fit h-8 w-8 rounded-full border border-gray-300"
                            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          />
                          <div className="mt-2 flex h-full w-0 flex-col border border-gray-400"></div>
                        </div>
                        <div className="mt-1 ml-2 flex w-11/12 flex-col">
                          <div className="text-sm font-medium">Fajar</div>
                          <div className="mt-2 text-sm font-light">
                            Melampirkan komentar Anda ke bagian tertentu dari dokumen membuat umpan
                            balik Anda lebih jelas. Jika orang lain mengomentari dokumen, membalas
                            komentar mereka memungkinkan Anda berdiskusi, bahkan ketika tidak semua
                            orang di dokumen secara bersamaan.
                          </div>
                          <div className="mt-2 flex items-center gap-4">
                            <div className="flex items-center gap-1 text-xs">
                              <ArrowUpCircleIcon className="h-5 w-5" />
                              <div>Vote</div>
                              <ArrowDownCircleIcon className="h-5 w-5" />
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div>Reply</div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div>Edit</div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div>Delete</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT BAR INFOERMATION */}
      <div className="t-0 mb-6 flex w-1/5 flex-col bg-white">
        <div className="rounded-md border border-gray-300 bg-white pr-2 pl-2 pt-6">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10"
              src="https://cdn-icons-png.flaticon.com/512/1933/1933108.png"
              alt=""
              srcset=""
            />
            <div className="text-sm font-medium">Very Cool Community</div>
          </div>
          <div className="mt-2 text-xs">Community for news and all the thing you need</div>
          <div className="mt-2 flex items-center gap-2">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-xs font-thin">Created 09/09/2009</div>
          </div>
          <div className="mt-2 flex gap-3 border-t border-b pt-1 pb-1">
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm">0</div>
              <div className="text-xs text-gray-400">Member</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm">0</div>
              <div className="text-xs text-gray-400">Online</div>
            </div>
          </div>
          <button className="mt-2 flex w-full justify-center rounded-full border border-red-400 pb-2 text-sm font-semibold text-red-500">
            Join
          </button>
        </div>
        <div className="mt-4 rounded-md border border-gray-300 bg-white">
          <div className="flex w-full rounded-t-md bg-red-400 pl-2 pt-1 pb-1 text-sm font-light text-white">
            Intertament rules
          </div>
          {rules.map((data, key) => {
            return <div className="border-b pl-2 pt-2 pb-1 text-xs">{`${key + 1}. ${data}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

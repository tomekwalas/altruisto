import * as browser from "webextension-polyfill"
import React, { useEffect, useState } from "react"
import facebook from "../../../assets/facebook.svg"
import twitter from "../../../assets/twitter.svg"
import copy from "../../../assets/copy.svg"
import copyToClipboard from "copy-to-clipboard"
import { useSnackbar } from "notistack"
import { TwitterCarousel } from "./TwitterCarousel"
import { useAuthContext } from "../../../common/auth"
import axios from "../../../../helpers/api"

import "./Share.scss"

export const Share: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [referralsNumber, setReferralsNumber] = useState(null)
  const [ref, setRef] = useState(null)
  const auth = useAuthContext()

  useEffect(() => {
    if (ref === null) {
      browser.storage.sync.get({ ref: null }).then(storage => setRef(storage.ref))
    }

    if (referralsNumber === null) {
      const getReferralsNumber = auth.user
        ? axios.get("/user", { headers: { "X-AUTH-TOKEN": auth.user.apiKey } })
        : browser.storage.local
            .get({ installationId: null })
            .then(storage => storage.installationId)
            .then(installationId => axios.get(`/installations/${installationId}`))

      getReferralsNumber.then(response => {
        setReferralsNumber(response.data.referrals_count)
      })
    }
  }, [])

  return (
    <div className="page">
      <div className="container">
        <div className="page__title m-b-0">
          <h1>Together</h1>
          <h1 className="text-gradient">we can do more!</h1>
        </div>
        <div className="fill-height">
          <p className="share__explanation">
            If every user invited <strong>just three of their friends</strong>, in a few short weeks
            we would be <strong>helping hundreds of thousands of people</strong> experience what's
            best in life, instead of suffering, pain, helplessness.
          </p>
          <p className="share__explanation">
            <strong>
              Help your friends discover altruisto
              <br />
              and do even more good:
            </strong>
          </p>
          <div className="share__buttons m-b-20">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//altruisto.com?ref=${ref}&source=facebook_share`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-no-decoration"
            >
              <button className="share-button share-button--facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  title="Facebook"
                  className="share-button__icon"
                />{" "}
                {/* Share */}
              </button>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Faltruisto.com%2F%3Fref%3D12345&text=Install%20an%20extension%20and%20when%20you%20buy%20stuff%20online%2C%20people%20in%20extreme%20poverty%20will%20get%20medicines%2C%20bed%20nets%2C%20or%20money%20https%3A%2F%2Faltruisto.com%2F%3Fref%3D${ref}&source=twitter_share`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-no-decoration"
            >
              <button className="share-button share-button--twitter">
                <img src={twitter} alt="Twitter" title="Twitter" />
                {/* Share */}
              </button>
            </a>
          </div>
          {// TODO: why is ref empty after register?
          ref ? (
            <div className="field m-t-10">
              <h1 className="m-b-20">Your referral link:</h1>
              <span className="field__appendix share__copy-icon">
                <button
                  className="button-link"
                  onClick={() => {
                    copyToClipboard(`https://altruisto.com/?ref=${ref}`)
                    enqueueSnackbar("Copied to clipboard!", {
                      variant: "info",
                      autoHideDuration: 900
                    })
                  }}
                >
                  <img src={copy} alt="Copy ref link" title="Copy icon" />
                </button>
              </span>
              <input
                className="field__input share__ref-link"
                type="text"
                id="ref-link"
                name="ref-link"
                value={`https://altruisto.com/?ref=${ref}`}
                onClick={event => {
                  copyToClipboard(`https://altruisto.com/?ref=${ref}`)
                  enqueueSnackbar("Copied to clipboard!", {
                    variant: "info",
                    autoHideDuration: 900
                  })
                  const input = event.target as HTMLInputElement
                  input.blur()
                }}
              />
            </div>
          ) : null}
          {referralsNumber !== null ? (
            <div className="m-t-20 m-b-10 ">
              <div className="share__invited-number">{referralsNumber} </div>
              <div className="share__invited-people">people joined thanks to you</div>
            </div>
          ) : null}
        </div>
      </div>
      <h1 className="container m-t-30">Talking about us:</h1>
      <TwitterCarousel />
    </div>
  )
}

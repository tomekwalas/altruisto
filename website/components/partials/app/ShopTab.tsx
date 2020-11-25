import React, { useState, useEffect, Fragment } from "react"
import { Partner } from "types/partner"
import { groupAplabetically } from "utils/group-alphabetically"
import { splitToEqualChunks } from "utils/split-to-equal-chunks"
import Link from "next/link"
import Modal from "react-modal"

type Props = {
  partners: Partner[]
}

Modal.setAppElement("#__next")

export const ShopTab: React.FC<Props> = ({ partners }) => {
  const [searchPhrase, setSearchPhrase] = useState("")
  const [searchedPartners, setSearchedPartners] = useState(partners)
  const [activePartner, setActivePartner] = useState<Partner | null>(null)

  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-30%",
      transform: "translate(-50%, -50%)",
      paddingLeft: "20px"
    }
  }

  useEffect(() => {
    if (searchPhrase) {
      setSearchedPartners(
        partners.filter(
          partner =>
            partner.name.toUpperCase().includes(searchPhrase.toUpperCase()) ||
            partner.domain.toUpperCase().includes(searchPhrase.toUpperCase())
        )
      )
    }
  }, [searchPhrase, partners])

  const groupedPartners = searchPhrase
    ? { "Search results": searchedPartners }
    : groupAplabetically(partners, "name")

  return (
    <>
      <div
        className="cover cover--small with-overlay"
        style={{ backgroundImage: "url(/images/default-small-cover.jpg)" }}
      >
        <h1>Partners List</h1>
      </div>
      <div className="partners__search-wrapper input-group">
        <input
          type="text"
          className="partners__search-input"
          placeholder="Search..."
          value={searchPhrase}
          onChange={e => setSearchPhrase(e.target.value)}
        />
        <div className="input-group-append">
          <button className="partners__search-button" type="button">
            <img src="/images/search.svg" title="search icon" alt="search icon" />
          </button>
        </div>
      </div>

      {Object.entries(groupedPartners).map(([group, partnersInGroup], index) => {
        return (
          <Fragment key={group}>
            <h2 className="mt-3">{group}</h2>
            <div className="row">
              <div className="col-12">
                {(partnersInGroup as Partner[]).map(partner => (
                  <Fragment key={partner.domain}>
                    <button onClick={() => setActivePartner(partner)}>{partner.name}</button>
                    <br />
                  </Fragment>
                ))}
              </div>
            </div>
          </Fragment>
        )
      })}
      <Modal
        isOpen={activePartner !== null}
        onRequestClose={() => setActivePartner(null)}
        style={customModalStyles}
      >
        <p>
          Click the button below to active donation for{" "}
          <strong>{activePartner && activePartner.name}</strong>
        </p>
        <a
          href={`https://api.altruisto.com/redirect?url=${
            activePartner ? activePartner.domain : ""
          }`}
          className="button"
          target="_blank"
        >
          Active donation
        </a>
      </Modal>
    </>
  )
}
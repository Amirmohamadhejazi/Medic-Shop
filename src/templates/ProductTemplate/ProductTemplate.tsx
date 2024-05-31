import { DOrganismContainer } from '@partials/containers/DOrganismContainer'

import { NewProductOrganism } from '@organisms/ProductOrganisms/NewProductOrganism'
import ProductOrganism from '@organisms/ProductOrganisms/ProductOrganism/ProductOrganism'

const ProductTemplate = () => {
    return (
        <section className='flex flex-col gap-6'>
            <DOrganismContainer>
                <NewProductOrganism />
            </DOrganismContainer>
            <DOrganismContainer>
                <ProductOrganism />
            </DOrganismContainer>
        </section>
    )
}

export default ProductTemplate

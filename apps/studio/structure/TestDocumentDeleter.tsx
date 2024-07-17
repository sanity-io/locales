import {WarningOutlineIcon} from '@sanity/icons'
import {Box, Button, Card, Container, Flex, Heading, Spinner, Stack, Text} from '@sanity/ui'
import React, {forwardRef, useCallback, useEffect, useState} from 'react'
import {Translate, useClient, useDataset, useDocumentStore, useTranslation} from 'sanity'
import {UserComponent} from 'sanity/structure'

import {i18nNamespace} from '../i18n'
import {hiddenPropName, localizationTest} from '../schemas/localizationTest'

const textSize = 2
const schemaTypeName = localizationTest.name
const apiVersion = '2023-11-30'

export const TestDocumentDeleter: UserComponent = forwardRef(function TestDocumentDeleter() {
  const documentCount = useTestDocumentCount()
  const dataset = useDataset()
  const client = useClient({apiVersion})
  const {t} = useTranslation(i18nNamespace)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteTestDocuments = useCallback(async () => {
    setIsDeleting(true)
    try {
      await client.delete(
        {
          query: '*[_type == $schemaTypeName && isI18nStudioDocument == true]',
          params: {schemaTypeName},
        },
        {visibility: 'async', tag: 'i18n.delete-test-documents'},
      )
    } catch (err) {
      console.error(`Failed to delete test documents: ${err}`)
      setIsDeleting(false)
    }
  }, [client])

  if (documentCount === undefined || documentCount === null) {
    return (
      <>
        <LocaleWarning />
        <Card height="fill" padding={4}>
          <Flex align="center" height="fill" justify="center" direction="row" gap={3}>
            <Spinner muted />
            <Text muted size={textSize}>
              {t('test-documents.loading-document-count')}
            </Text>
          </Flex>
        </Card>
      </>
    )
  }

  if (documentCount === 0) {
    return (
      <>
        <LocaleWarning />
        <Card height="fill" padding={4}>
          <Flex align="center" height="fill" justify="center" direction="column" gap={3}>
            <Text size={textSize}>{t('test-documents.test-document-count', {count: 0})}</Text>
          </Flex>
        </Card>
      </>
    )
  }

  return (
    <>
      <LocaleWarning />
      <Flex padding={2} height="fill" align="center">
        <Container width={1}>
          <Card padding={3} radius={2} tone="caution" marginBottom={4} flex="none">
            <Stack space={4}>
              <Flex>
                <Text aria-hidden="true" size={4}>
                  <WarningOutlineIcon />
                </Text>
                <Box flex={1} marginLeft={3}>
                  <Heading>{t('test-documents.confirmation-title')}</Heading>
                </Box>
              </Flex>

              <Stack space={4}>
                <Text size={textSize} as="p">
                  <Translate
                    t={t}
                    i18nKey="test-documents.test-document-count"
                    values={{count: documentCount, dataset}}
                  />
                </Text>
                <Text size={textSize} as="p">
                  <Translate
                    t={t}
                    i18nKey="test-documents.test-document-description"
                    values={{schemaTypeName, propName: hiddenPropName}}
                  />
                </Text>
              </Stack>

              <Flex>
                <Button
                  disabled={isDeleting}
                  loading={isDeleting}
                  text={t('test-documents.action.delete-test-documents', {count: documentCount})}
                  tone="critical"
                  onClick={handleDeleteTestDocuments}
                />
              </Flex>
            </Stack>
          </Card>
        </Container>
      </Flex>
    </>
  )
})

function LocaleWarning() {
  return (
    <Card padding={3} tone="primary" data-testid="test-navbar-banner-config">
      <Flex align="center" gap={4}>
        <Text weight="semibold" size={1}>
          Note: this section, and the structure items to the left are not localized through the
          default locale bundles, and should be considered out of scope. See{' '}
          <code>apps/studio/i18n/index.ts</code>.
        </Text>
      </Flex>
    </Card>
  )
}

function useTestDocumentCount() {
  const documentStore = useDocumentStore()
  const [count, setCount] = useState<number | undefined>(undefined)

  useEffect(() => {
    const query = documentStore
      .listenQuery(
        {
          fetch: 'count(*[_type == $schemaTypeName && isI18nStudioDocument == true])',
          listen: '*[_type == $schemaTypeName && isI18nStudioDocument == true]',
        },
        {schemaTypeName},
        {
          apiVersion,
          tag: 'i18n.test-document-count',
          transitions: ['appear', 'disappear'],
        },
      )
      .subscribe(setCount)
    return () => query.unsubscribe()
  }, [documentStore])

  return count
}
